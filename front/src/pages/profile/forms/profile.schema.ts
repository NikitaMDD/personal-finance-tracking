import { z } from "zod";

export const profileSchema = z.object({

    firstName: z
        .string()
        .min(2, "Минимум 2 символа")
        .max(30, "Максимум 30 символов"),

    lastName: z
        .string()
        .min(2, "Минимум 2 символа")
        .max(30, "Максимум 30 символов"),

    email: z
        .email("Некорректный email"),

    phone: z
        .string()
        .min(10, "Введите телефон"),

});

export type ProfileFormValues =
    z.infer<typeof profileSchema>;