import { NextResponse } from "next/server";
import { Resend } from "resend";

// Supabase Database Webhook payload shape for auth.users UPDATE events.
interface SupabaseWebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  schema: string;
  table: string;
  record: {
    id: string;
    email: string;
    email_confirmed_at: string | null;
    raw_user_meta_data?: { full_name?: string; business_type?: string } | null;
  };
  old_record?: {
    email_confirmed_at: string | null;
  } | null;
}

function buildWelcomeHtml(firstName: string) {
  const name = firstName || "there";
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f8faf9;font-family:Inter,system-ui,sans-serif;color:#191c1c;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.06);overflow:hidden;">
            <tr>
              <td style="background:#062d24;padding:32px 40px;color:#ffffff;">
                <div style="font-size:28px;font-weight:700;letter-spacing:-0.02em;">AceGlobal</div>
                <div style="margin-top:8px;color:#a8cfc1;font-size:14px;letter-spacing:0.05em;text-transform:uppercase;">Professional Bookkeeping</div>
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <h1 style="margin:0 0 16px;font-size:24px;font-weight:600;color:#001710;">Welcome, ${name}.</h1>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#414845;">Your AceGlobal account is now active. Your dashboard is ready with industry-specific bookkeeping tools tailored to your operation.</p>
                <p style="margin:0 0 32px;font-size:16px;line-height:1.6;color:#414845;">Here's what to do next:</p>
                <ul style="margin:0 0 32px;padding-left:20px;font-size:16px;line-height:1.8;color:#414845;">
                  <li>Open your dashboard to see your starter financial snapshot</li>
                  <li>Review the recommended bookkeeping needs you selected during signup</li>
                  <li>Schedule a free discovery call to onboard your books</li>
                </ul>
                <a href="https://aceglobal.vercel.app/dashboard" style="display:inline-block;background:#006c49;color:#ffffff;padding:14px 28px;border-radius:12px;font-weight:600;text-decoration:none;font-size:16px;">Open my dashboard →</a>
                <p style="margin:32px 0 0;font-size:14px;line-height:1.6;color:#717975;">If anything looks off, just reply to this email — a real human on the AceGlobal team will help.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px;background:#f2f4f3;border-top:1px solid #e1e3e2;font-size:12px;color:#717975;">
                <p style="margin:0 0 8px;">AceGlobal Financial Services</p>
                <p style="margin:0;">You received this email because you signed up at <a href="https://aceglobal.vercel.app" style="color:#006c49;">aceglobal.vercel.app</a>.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildWelcomeText(firstName: string) {
  const name = firstName || "there";
  return `Welcome, ${name}.

Your AceGlobal account is now active. Your dashboard is ready with industry-specific bookkeeping tools tailored to your operation.

Here's what to do next:
- Open your dashboard to see your starter financial snapshot
- Review the recommended bookkeeping needs you selected during signup
- Schedule a free discovery call to onboard your books

Open your dashboard: https://aceglobal.vercel.app/dashboard

If anything looks off, just reply to this email — a real human on the AceGlobal team will help.

— The AceGlobal Team`;
}

export async function POST(req: Request) {
  // 1. Verify shared-secret header
  const expected = process.env.WELCOME_WEBHOOK_SECRET;
  const provided = req.headers.get("x-webhook-secret");
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // 2. Validate payload
  let payload: SupabaseWebhookPayload;
  try {
    payload = (await req.json()) as SupabaseWebhookPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (payload.type !== "UPDATE" || payload.table !== "users") {
    return NextResponse.json({ skipped: "wrong_event" }, { status: 200 });
  }

  const justConfirmed =
    payload.record.email_confirmed_at != null &&
    (payload.old_record?.email_confirmed_at == null);

  if (!justConfirmed) {
    return NextResponse.json({ skipped: "not_confirmation_transition" }, { status: 200 });
  }

  // 3. Send via Resend
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.WELCOME_FROM ?? "AceGlobal Team <onboarding@resend.dev>";
  if (!apiKey) {
    return NextResponse.json({ error: "missing_resend_api_key" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fullName = payload.record.raw_user_meta_data?.full_name ?? "";
  const firstName = fullName.split(" ")[0] ?? "";

  const { error } = await resend.emails.send({
    from,
    to: payload.record.email,
    subject: `Welcome to AceGlobal, ${firstName || "friend"}`,
    html: buildWelcomeHtml(firstName),
    text: buildWelcomeText(firstName),
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json({ error: "send_failed", detail: error.message }, { status: 502 });
  }

  return NextResponse.json({ sent: true, to: payload.record.email });
}
