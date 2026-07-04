import {
    Wallet,
    FolderOpen,
    Target,
    ReceiptText,
} from "lucide-react";

import type {
    LucideIcon,
} from "lucide-react";

interface ProfileStatItem {
    key:
        | "accounts"
        | "categories"
        | "budgets"
        | "operations";

    label: string;
    icon: LucideIcon;
    featured?: boolean;
}

export const profileStatsConfig: ProfileStatItem[] = [
    {
        key: "operations",
        label: "Операций",
        icon: ReceiptText,
        featured: true,
    },
    {
        key: "accounts",
        label: "Счета",
        icon: Wallet,
    },
    {
        key: "categories",
        label: "Категории",
        icon: FolderOpen,
    },
    {
        key: "budgets",
        label: "Бюджеты",
        icon: Target,
    },
];