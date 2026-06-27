import type { Transaction } from "../model";
import type { TransactionFilter } from "@/entities/transaction/model";

interface Options {
    filter: TransactionFilter;
    search: string;
}

export function applyTransactionFilters(
    transactions: Transaction[],
    {
        filter,
        search,
    }: Options,
): Transaction[] {

    let result = [...transactions];

    switch (filter) {

        case "income":
            result = result.filter(
                transaction => transaction.type === "income",
            );
            break;

        case "expense":
            result = result.filter(
                transaction => transaction.type === "expense",
            );
            break;

        default:
            break;

    }

    // поиск

    if (search.trim()) {

        const query = search.toLowerCase();

        result = result.filter(transaction =>
            transaction.title
                .toLowerCase()
                .includes(query),
        );

    }

    return result;
}