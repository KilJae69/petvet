import { z } from "zod";

export const contactFormSchema = (t: (key: string) => string) =>
  z.object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .max(100, { message: t("validation.nameMax") })
      .refine((value) => /^[a-zA-ZčćšđžČĆŠĐŽ\s]+$/.test(value), {
        message: t("validation.nameLetters"),
      }),

    senderEmail: z
      .string()
      .trim()
      .email({ message: t("validation.emailInvalid") })
      .min(1, { message: t("validation.required") })
      .max(100, { message: t("validation.emailMax") }),

    phone: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .max(20, { message: t("validation.phoneMax") })
      .regex(/^[\d\s()+-]+$/, { message: t("validation.phoneInvalid") }),

    subject: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .max(100, { message: t("validation.subjectMax") }),

    message: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .max(1000, { message: t("validation.messageMax") }),
  });

export type TContactFormSchema = z.infer<ReturnType<typeof contactFormSchema>>;

export type ContactFormData = {
  fullName: string;
  senderEmail: string;
  subject: string;
  message: string;
  phone:string;
}