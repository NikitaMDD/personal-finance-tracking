import {
    ChartColumn,
    CreditCard,
    Import,
    LayoutDashboard,
    Settings,
    Tags,
    Wallet,
} from "lucide-react";

import { ROUTES } from "@/shared/constants/routes";

import type { SidebarItem } from "./sidebar.types";

export const sidebarItems: SidebarItem[] = [
    {
        title: "Главная",
        icon: LayoutDashboard,
        href: ROUTES.DASHBOARD,
    },
    {
        title: "Транзакции",
        icon: CreditCard,
        href: ROUTES.TRANSACTIONS,
    },
    {
        title: "Аналитика",
        icon: ChartColumn,
        href: ROUTES.ANALYTICS,
    },
    {
        title: "Категории",
        icon: Tags,
        href: ROUTES.CATEGORIES,
    },
    {
        title: "Бюджет",
        icon: Wallet,
        href: ROUTES.BUDGET,
    },
];

export const sidebarBottomItems: SidebarItem[] = [
    {
        title: "Загрузить выписку",
        icon: Import,
        href: ROUTES.IMPORT,
    },
    {
        title: "Настройки",
        icon: Settings,
        href: ROUTES.SETTINGS,
    },
];