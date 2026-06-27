import type { Transaction } from "../model";

export function filterTransactionsByAccount(
    transactions: Transaction[],
    accountId: string,
): Transaction[] {

    if (accountId === "all") {
        return transactions;
    }

    return transactions.filter(
        transaction => transaction.accountId === accountId,
    );
}