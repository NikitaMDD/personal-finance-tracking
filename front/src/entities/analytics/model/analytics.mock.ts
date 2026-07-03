import type {
    AnalyticsSummary,
    DailyExpense,
    ExpenseCategory,
    MonthlyExpense,
    AnalyticsPeriod,
} from "./analytics.types";

interface AnalyticsData {
    summary: AnalyticsSummary;
    categories: ExpenseCategory[];
    daily: DailyExpense[];
    monthly: MonthlyExpense[];
}

export const analyticsMock: Record<
    AnalyticsPeriod,
    AnalyticsData
> = {
    week: {
        summary: {
            income: 35000,
            expenses: 22000,
            balance: 13000,
            operations: 52,
        },

        categories: [
            {
                categoryId: "products",
                title: "Продукты",
                icon: "shopping-basket",
                color: "#22C55E",
                amount: 7200,
                percent: 33,
            },
            {
                categoryId: "transport",
                title: "Транспорт",
                icon: "car",
                color: "#3B82F6",
                amount: 4800,
                percent: 22,
            },
            {
                categoryId: "cafe",
                title: "Кафе",
                icon: "restaurant",
                color: "#F97316",
                amount: 3600,
                percent: 16,
            },
            {
                categoryId: "other",
                title: "Другое",
                icon: "gift",
                color: "#64748B",
                amount: 6400,
                percent: 29,
            },
        ],

        daily: [
            { day: "Пн", amount: 3200 },
            { day: "Вт", amount: 2800 },
            { day: "Ср", amount: 4100 },
            { day: "Чт", amount: 1900 },
            { day: "Пт", amount: 5200 },
            { day: "Сб", amount: 3400 },
            { day: "Вс", amount: 1400 },
        ],

        monthly: [
            {
                month: "Неделя",
                income: 35000,
                expenses: 22000,
            },
        ],
    },

    month: {
        summary: {
            income: 156000,
            expenses: 98500,
            balance: 57500,
            operations: 247,
        },

        categories: [
            {
                categoryId: "products",
                title: "Продукты",
                icon: "shopping-basket",
                color: "#22C55E",
                amount: 24500,
                percent: 24,
            },
            {
                categoryId: "transport",
                title: "Транспорт",
                icon: "car",
                color: "#3B82F6",
                amount: 18500,
                percent: 19,
            },
            {
                categoryId: "house",
                title: "Дом",
                icon: "house",
                color: "#F97316",
                amount: 14000,
                percent: 14,
            },
            {
                categoryId: "entertainment",
                title: "Развлечения",
                icon: "gamepad",
                color: "#8B5CF6",
                amount: 12000,
                percent: 12,
            },
            {
                categoryId: "other",
                title: "Другое",
                icon: "gift",
                color: "#64748B",
                amount: 29500,
                percent: 31,
            },
        ],

        daily: [
            { day: "1", amount: 2300 },
            { day: "2", amount: 4100 },
            { day: "3", amount: 1850 },
            { day: "4", amount: 5200 },
            { day: "5", amount: 3900 },
            { day: "6", amount: 6100 },
            { day: "7", amount: 2700 },
        ],

        monthly: [
            {
                month: "Янв",
                income: 120000,
                expenses: 95000,
            },
            {
                month: "Фев",
                income: 130000,
                expenses: 98000,
            },
            {
                month: "Мар",
                income: 126000,
                expenses: 87000,
            },
            {
                month: "Апр",
                income: 145000,
                expenses: 102000,
            },
            {
                month: "Май",
                income: 152000,
                expenses: 98000,
            },
            {
                month: "Июн",
                income: 156000,
                expenses: 98500,
            },
        ],
    },

    year: {
        summary: {
            income: 1870000,
            expenses: 1220000,
            balance: 650000,
            operations: 2980,
        },

        categories: [
            {
                categoryId: "products",
                title: "Продукты",
                icon: "shopping-basket",
                color: "#22C55E",
                amount: 287000,
                percent: 24,
            },
            {
                categoryId: "transport",
                title: "Транспорт",
                icon: "car",
                color: "#3B82F6",
                amount: 194000,
                percent: 16,
            },
            {
                categoryId: "house",
                title: "Дом",
                icon: "house",
                color: "#F97316",
                amount: 178000,
                percent: 15,
            },
            {
                categoryId: "travel",
                title: "Путешествия",
                icon: "plane",
                color: "#8B5CF6",
                amount: 226000,
                percent: 18,
            },
            {
                categoryId: "other",
                title: "Другое",
                icon: "gift",
                color: "#64748B",
                amount: 335000,
                percent: 27,
            },
        ],

        daily: [
            { day: "Янв", amount: 82000 },
            { day: "Фев", amount: 91000 },
            { day: "Мар", amount: 86000 },
            { day: "Апр", amount: 94000 },
            { day: "Май", amount: 97000 },
            { day: "Июн", amount: 101000 },
            { day: "Июл", amount: 93000 },
            { day: "Авг", amount: 99000 },
            { day: "Сен", amount: 103000 },
            { day: "Окт", amount: 98000 },
            { day: "Ноя", amount: 95000 },
            { day: "Дек", amount: 111000 },
        ],

        monthly: [
            {
                month: "2025",
                income: 1870000,
                expenses: 1220000,
            },
        ],
    },
};