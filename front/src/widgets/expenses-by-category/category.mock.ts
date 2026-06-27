import type { ExpenseCategory } from "./category.types";

export const expenseCategoriesMock: ExpenseCategory[] = [
    {
        id: "food",
        title: "Еда",
        amount: 18500,
        percent: 38,
        color: "#3B82F6",
    },
    {
        id: "transport",
        title: "Транспорт",
        amount: 6400,
        percent: 14,
        color: "#22C55E",
    },
    {
        id: "shopping",
        title: "Покупки",
        amount: 9200,
        percent: 19,
        color: "#F59E0B",
    },
    {
        id: "other",
        title: "Другое",
        amount: 14500,
        percent: 29,
        color: "#8B5CF6",
    },
];