import { z } from "zod";

export const budgetSchema = z.object({
    title: z
        .string()
        .min(2, "Минимум 2 символа")
        .max(40, "Максимум 40 символов"),

    categoryId: z
        .string()
        .min(1, "Выберите категорию"),

    limit: z.coerce
        .number()
        .positive("Лимит должен быть больше 0"),

    period: z.enum([
        "week",
        "month",
        "year",
    ]),
});

export type BudgetFormValues =
    z.infer<typeof budgetSchema>;