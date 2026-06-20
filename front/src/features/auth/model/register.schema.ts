import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Минимум 2 символа"),

    email: z
      .email("Введите корректный email"),

    password: z
      .string()
      .min(6, "Минимум 6 символов"),

    confirmPassword: z.string(),
  })
  .refine(
    data =>
      data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Пароли не совпадают",
    },
  );

export type RegisterFormData =
  z.infer<typeof registerSchema>;