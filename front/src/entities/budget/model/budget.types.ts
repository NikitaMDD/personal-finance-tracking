export type BudgetPeriod =
    | "week"
    | "month"
    | "year";

export interface Budget {
    id: string;
    categoryId: string;
    title: string;
    icon: string;
    color: string;
    limit: number;
    spent: number;
    period: BudgetPeriod;
}

export interface BudgetOverview {
    totalLimit: number;
    totalSpent: number;
    totalRemaining: number;
    percent: number;
}