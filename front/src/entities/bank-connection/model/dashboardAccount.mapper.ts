import type {
    DashboardAccountResponse,
} from "./dashboard-account.types";

import type {
    Account,
} from "@/entities/account/model";

export function toAccount(
    account: DashboardAccountResponse,
): Account {

    return {
        id: account.id,
        title: account.title,
        type: "bank",
        bank: account.bankCode,
        balance: account.balance,
        currency: account.currency,
        lastCardNumbers:
            account.lastCardNumbers,
        isMain:
            account.isMain,
    };
}