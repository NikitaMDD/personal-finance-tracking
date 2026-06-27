import type { Transaction } from "../model";

import type {
    TransactionSort,
} from "@/entities/transaction/model";

export function sortTransactions(
    transactions: Transaction[],
    sort: TransactionSort,
): Transaction[] {

    const result = [...transactions];

    switch (sort) {

        case "newest":

            return result.sort(
                (a, b) =>
                    new Date(b.date).getTime() -
                    new Date(a.date).getTime(),
            );

        case "oldest":

            return result.sort(
                (a, b) =>
                    new Date(a.date).getTime() -
                    new Date(b.date).getTime(),
            );

        case "amount-desc":

            return result.sort(
                (a, b) =>
                    b.amount - a.amount,
            );

        case "amount-asc":

            return result.sort(
                (a, b) =>
                    a.amount - b.amount,
            );

        default:

            return result;
    }
}