import { BANKS } from "../config";
import type { LucideIcon } from "lucide-react";
import {
    Banknote,
    Landmark,
    Bitcoin,
    Layers3,
} from "lucide-react";

import type {
    Account,
    AccountType,
} from "../model";

export interface AccountMedia {
    type: "image" | "icon";
    value: string | LucideIcon;
}

export interface AccountMeta {
    title: string;
    media: AccountMedia;
    color: string;
    footer: string;
}

export function getAccountMeta(
    account: Account,
): AccountMeta {

    if (account.bank) {
        const bank = BANKS[account.bank];

        return {
            title: bank.title,
            media: {
                type: "image",
                value: bank.logo,
            },
            color: bank.color,
            footer: account.lastCardNumbers
                ? `•••• ${account.lastCardNumbers}`
                : "",
        };
    }

    switch (account.type) {
        case "cash":
            return {
                title: "Наличные",
                media: {
                    type: "icon",
                    value: Banknote,
                },
                color: "#22C55E",
                footer: "Наличные средства",
            };

        case "investment":
            return {
                title: "Инвестиции",
                media: {
                    type: "icon",
                    value: Landmark
                },
                color: "#8B5CF6",
                footer: "Инвестиционный счет",
            };

        case "crypto":
            return {
                title: "Криптовалюта",
                media: {
                    type: "icon",
                    value: Bitcoin
                },
                color: "#F59E0B",
                footer: "Криптовалютный кошелек",
            };

        default:
            return {
                title: account.title,
                media: {
                    type: "icon",
                    value: Layers3
                },
                color: "#3B82F6",
                footer: "",
            };
    }
}