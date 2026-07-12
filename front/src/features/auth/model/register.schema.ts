import { z } from "zod";

export const registerSchema = z
    .object({

        firstName: z
            .string()
            .min(2, "Минимум 2 символа"),

        lastName: z
            .string()
            .min(2, "Минимум 2 символа"),

        email: z
            .email("Введите корректный email"),

        phone: z
            .string()
            .optional(),

        password: z
            .string()
            .min(8, "Минимум 8 символов"),

        confirmPassword: z.string(),

    })
    .refine(
        data =>
            data.password ===
            data.confirmPassword,
        {
            path: [
                "confirmPassword",
            ],
            message:
                "Пароли не совпадают",
        },
    );

export type RegisterFormData =
    z.infer<
        typeof registerSchema
    >;