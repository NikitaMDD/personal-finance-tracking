import type { CategoryIcon } from "@/entities/category/model/category.types";

export type AnalyticsPeriod =
    | "week"
    | "month"
    | "year";

export interface AnalyticsSummary {
    income: number;
    expenses: number;
    balance: number;
    operations: number;
}

export interface ExpenseCategory {
    categoryId: string;
    title: string;
    icon: CategoryIcon;
    color: string;
    amount: number;
    percent: number;
}

export interface DailyExpense {
    day: string;
    amount: number;
}

export interface MonthlyExpense {
    month: string;
    income: number;
    expenses: number;
}

export interface AnalyticsState {
    period: AnalyticsPeriod;
    hoveredCategory?: string;
    selectedAccount?: string;
}