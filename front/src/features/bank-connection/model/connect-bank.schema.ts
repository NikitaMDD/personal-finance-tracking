import { z } from "zod";

export const connectBankSchema = z.object({
    bankId: z
        .string()
        .min(1, "Выберите банк"),
    externalAccountId: z
        .string()
        .min(4, "Введите идентификатор счёта"),
});

export type ConnectBankFormData =
    z.infer<typeof connectBankSchema>;