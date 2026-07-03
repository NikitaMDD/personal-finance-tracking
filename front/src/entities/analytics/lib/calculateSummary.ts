import type { Transaction } from "@/entities/transaction/model";

import type {
    AnalyticsSummary,
} from "../model";

export function calculateSummary(
    transactions: Transaction[],
): AnalyticsSummary {

    const income = transactions
        .filter(t => t.type === "income")
        .reduce(
            (sum, transaction) =>
                sum + transaction.amount,
            0,
        );

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce(
            (sum, transaction) =>
                sum + transaction.amount,
            0,
        );

    return {
        income,
        expenses,
        balance: income - expenses,
        operations: transactions.length,
    };

}