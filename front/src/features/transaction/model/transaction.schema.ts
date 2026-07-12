import { z } from "zod";

export const transactionSchema = z.object({
    bankConnectionId: z
        .string()
        .uuid("Выберите счёт"),
    categoryId: z
        .string()
        .uuid("Выберите категорию"),
    title: z
        .string()
        .min(2, "Введите название"),
    description: z
        .string(),
    amount: z
        .number({
            error: "Введите сумму",
        })
        .positive(),
    type: z.enum([
        "INCOME",
        "EXPENSE",
    ]),
    transactionDate: z
        .string(),
});

export type TransactionSchema =
    z.infer<typeof transactionSchema>;