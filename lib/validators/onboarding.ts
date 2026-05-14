import { z } from "zod";

export const businessTypeSchema = z.enum(["trucker", "farmer", "other"]);
export const revenueRangeSchema = z.enum(["0-100k", "100k-500k", "500k-1m", "1m+"]);

export const step1Schema = z.object({
  full_name: z.string().min(1, "Required").max(120),
  email: z.string().email("Invalid email"),
  business_type: businessTypeSchema,
  annual_revenue_range: revenueRangeSchema,
  bookkeeping_needs: z.array(z.string()).default([]),
});

export const step2Schema = z.object({
  business_name: z.string().min(1, "Required").max(200),
  scale_unit_count: z.coerce.number().int().min(0).max(100000),
  state: z.string().min(2).max(2, "Use 2-letter state code"),
});

export const step3Schema = z
  .object({
    password: z.string().min(8, "At least 8 characters"),
    confirm: z.string(),
    terms_accepted: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  })
  .refine((v) => v.password === v.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type Step1 = z.infer<typeof step1Schema>;
export type Step2 = z.infer<typeof step2Schema>;
export type Step3 = z.infer<typeof step3Schema>;
