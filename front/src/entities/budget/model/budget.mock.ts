import type {
    Budget,
    BudgetOverview,
} from "./budget.types";

export const budgetOverviewMock: BudgetOverview = {
    totalLimit: 150000,
    totalSpent: 98500,
    totalRemaining: 51500,
    percent: 66,
};

export const budgetsMock: Budget[] = [
    {
        id: "products",
        categoryId: "products",
        title: "Продукты",
        icon: "shopping-basket",
        color: "#22C55E",
        limit: 35000,
        spent: 24500,
        period: "month",
    },
    {
        id: "transport",
        categoryId: "transport",
        title: "Транспорт",
        icon: "car",
        color: "#3B82F6",
        limit: 25000,
        spent: 18000,
        period: "month",
    },
    {
        id: "house",
        categoryId: "house",
        title: "Дом",
        icon: "house",
        color: "#F97316",
        limit: 20000,
        spent: 22000,
        period: "month",
    },
    {
        id: "entertainment",
        categoryId: "entertainment",
        title: "Развлечения",
        icon: "gamepad",
        color: "#8B5CF6",
        limit: 15000,
        spent: 7000,
        period: "month",
    },
    {
        id: "other",
        categoryId: "other",
        title: "Другое",
        icon: "gift",
        color: "#64748B",
        limit: 25000,
        spent: 27000,
        period: "month",
    },
];