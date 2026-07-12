import { useForm } from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import {
    transactionSchema,
} from "../model/transaction.schema";

import type {
    TransactionSchema,
} from "../model/transaction.schema";

export function useTransactionForm() {
    
    return useForm<TransactionSchema>({
        resolver:
            zodResolver(
                transactionSchema,
            ),
        mode: "onChange",
        defaultValues: {
            bankConnectionId: "",
            categoryId: "",
            title: "",
            description: "",
            amount: 0,
            type: "EXPENSE",
            transactionDate:
                new Date()
                    .toISOString()
                    .slice(0,16),
        },
    });
}