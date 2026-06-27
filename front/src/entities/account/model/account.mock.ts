import type { Account } from "./account.types";

export const accountsMock: Account[] = [
    {
        id: "1",
        title: "Основная карта",
        type: "bank",
        bank: "tbank",
        balance: 183450,
        currency: "RUB",
        lastCardNumbers: "4589",
        isMain: true,
    },

    {
        id: "2",
        title: "Зарплатная карта",
        type: "bank",
        bank: "sber",
        balance: 42500,
        currency: "RUB",
        lastCardNumbers: "9215",
    },

    {
        id: "3",
        title: "Накопительный счет",
        type: "bank",
        bank: "alfa",
        balance: 95000,
        currency: "RUB",
    },

    {
        id: "4",
        title: "Наличные",
        type: "cash",
        balance: 12300,
        currency: "RUB",
    },

    {
        id: "5",
        title: "Инвестиции",
        type: "investment",
        balance: 368000,
        currency: "RUB",
    },

    {
        id: "6",
        title: "Все счета",
        type: "bank",
        balance: 701250,
        currency: "RUB",
        isAggregate: true,
    },
];