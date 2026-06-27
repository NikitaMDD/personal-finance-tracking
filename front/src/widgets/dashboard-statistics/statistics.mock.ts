import type { StatisticItem } from "./statistics.types";

export const statisticsMock: StatisticItem[] = [
    {
        title: "Доходы",
        value: "+120 000 ₽",
        subtitle: "за месяц",
    },

    {
        title: "Расходы",
        value: "-48 230 ₽",
        subtitle: "за месяц",
    },

    {
        title: "Баланс",
        value: "71 770 ₽",
        subtitle: "текущий",
    },

    {
        title: "Экономия",
        value: "12%",
        subtitle: "по сравнению с прошлым",
    },
];