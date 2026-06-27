import type { Transaction } from "../model";

export interface DashboardStatistics {
    income: number;
    expenses: number;
    balance: number;
    savings: number;
}

export function getDashboardStatistics(
    transactions: Transaction[],
): DashboardStatistics {

    const income = transactions
        .filter(transaction => transaction.type === "income")
        .reduce(
            (sum, transaction) => sum + transaction.amount,
            0,
        );

    const expenses = transactions
        .filter(transaction => transaction.type === "expense")
        .reduce(
            (sum, transaction) => sum + Math.abs(transaction.amount),
            0,
        );

    const balance = income - expenses;

    const savings =
        income === 0
            ? 0
            : Math.round(balance / income * 100);

    return {
        income,
        expenses,
        balance,
        savings,
    };
}