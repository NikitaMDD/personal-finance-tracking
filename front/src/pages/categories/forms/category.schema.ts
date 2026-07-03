import { z } from "zod";

export const categorySchema = z.object({

    title: z
        .string()
        .trim()
        .min(2, "Минимум 2 символа")
        .max(40, "Максимум 40 символов"),

    type: z.enum([
        "expense",
        "income",
    ]),

    color: z.string(),

    icon: z.string(),

});

export type CategoryFormValues =
    z.infer<typeof categorySchema>;