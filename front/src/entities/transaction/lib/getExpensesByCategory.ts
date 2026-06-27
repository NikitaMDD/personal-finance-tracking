import type { Transaction } from "../model";

export interface ExpenseCategory {
    id: string;
    title: string;
    amount: number;
    percent: number;
    color: string;
}

const CATEGORY_META: Record<
    string,
    {
        title: string;
        color: string;
    }
> = {
    food: {
        title: "Еда",
        color: "#3B82F6",
    },
    transport: {
        title: "Транспорт",
        color: "#22C55E",
    },
    shopping: {
        title: "Покупки",
        color: "#F59E0B",
    },
    salary: {
        title: "Доход",
        color: "#6366F1",
    },
    other: {
        title: "Другое",
        color: "#8B5CF6",
    },
};

export function getExpensesByCategory(
    transactions: Transaction[],
): ExpenseCategory[] {

    const expenses = transactions.filter(
        transaction => transaction.type === "expense",
    );

    const total = expenses.reduce(
        (sum, transaction) => sum + Math.abs(transaction.amount),
        0,
    );

    const grouped = new Map<
        string,
        number
    >();
    expenses.forEach(transaction => {
        grouped.set(
            transaction.categoryId,
            (grouped.get(transaction.categoryId) ?? 0)
            + Math.abs(transaction.amount),
        );
    });
    return [...grouped.entries()]
        .map(([id, amount]) => {
            const meta =
                CATEGORY_META[id] ??
                CATEGORY_META.other;
            return {
                id,
                title: meta.title,
                amount,
                percent:
                    total === 0
                        ? 0
                        : Math.round(amount / total * 100),
                color: meta.color,
            };
        })
        .sort(
            (a, b) => b.amount - a.amount,
        );
}