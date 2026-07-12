import { useState } from "react";

import {
    TransactionList,
} from "@/entities/transaction/ui";

import {
    applyTransactionFilters,
    sortTransactions,
} from "@/entities/transaction";

import {
    useTransactions,
} from "@/entities/transaction/hooks/useTransactions";

import {
    useUIStore,
} from "@/shared/store/ui.store";

import type {
    TransactionFilter,
    TransactionSort,
    Transaction,
} from "@/entities/transaction/model";

import {
    TransactionDialog,
} from "@/features/transaction/components/TransactionDialog";

interface Props {
    filter: TransactionFilter;
    sort: TransactionSort;
}

export function TransactionsContent({
    filter,
    sort,
}: Props) {

    const {
        data = [],
        isLoading,
    } = useTransactions();

    const searchValue =
        useUIStore(
            state => state.searchValue,
        );

    const [
        selectedTransaction,
        setSelectedTransaction,
    ] = useState<Transaction>();

    if (isLoading) {
        return <>Загрузка...</>;
    }

    const filtered =
        applyTransactionFilters(
            data,
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
        <>
            <TransactionList
                transactions={transactions}
                onClick={setSelectedTransaction}
            />

            <TransactionDialog
                open={Boolean(selectedTransaction)}
                mode="edit"
                transaction={selectedTransaction}
                onOpenChange={(open) => {

                    if (!open) {
                        setSelectedTransaction(
                            undefined,
                        );
                    }

                }}
            />
        </>
    );
}