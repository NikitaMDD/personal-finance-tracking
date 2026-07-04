import type {
    ConnectedBank,
    ProfileStatistics,
    SecurityInfo,
    UserProfile,
} from "./profile.types";

export const profileMock: UserProfile = {
    id: "1",
    firstName: "Никита",
    lastName: "Марчук",
    email: "nikita@mail.ru",
    phone: "+7 (999) 123-45-67",
    role: "Пользователь",
    premium: true,
};

export const profileStatisticsMock: ProfileStatistics = {
    accounts: 4,
    categories: 12,
    budgets: 6,
    operations: 247,
    income: 156000,
    expenses: 98500,
    balance: 57500,
};

import SberLogo from "@/shared/assets/banks/sber.svg";
import AlfaLogo from "@/shared/assets/banks/alfa.svg";
import VtbLogo from "@/shared/assets/banks/vtb.svg"

export const connectedBanksMock: ConnectedBank[] = [

    {
        id: "1",
        title: "Сбербанк",
        logo: SberLogo,
        connected: true,
    },

    {
        id: "2",
        title: "Альфа-Банк",
        logo: AlfaLogo,
        connected: true,
    },

    {
        id: "3",
        title: "ВТБ",
        logo: VtbLogo,
        connected: false,
    },

];

export const securityMock: SecurityInfo = {
    lastLogin: "Сегодня, 11:42",
    twoFactorEnabled: false,
};