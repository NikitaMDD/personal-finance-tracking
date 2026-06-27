import {
    transactionsMock,
} from "@/entities/transaction/model";

import {
    TransactionList,
} from "@/entities/transaction/ui";

import {
    applyTransactionFilters,
    sortTransactions,
} from "@/entities/transaction";

import {
    useUIStore,
} from "@/shared/store/ui.store";

import type {
    TransactionFilter,
} from "@/entities/transaction/model";

import type {
    TransactionSort,
} from "@/entities/transaction/model";

interface Props {
    filter: TransactionFilter;
    sort: TransactionSort;
}

export function TransactionsContent({
    filter,
    sort,
}: Props) {

    const searchValue =
        useUIStore(
            state => state.searchValue,
        );

    const filtered =
        applyTransactionFilters(
            transactionsMock,
            {
                filter,
                search: searchValue,
            },
        );

    const transactions =
        sortTransactions(
            filtered,
            sort,
        );

    return (

        <TransactionList
            transactions={transactions}
        />

    );
}