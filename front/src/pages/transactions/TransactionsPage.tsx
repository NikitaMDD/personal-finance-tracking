import { useState } from "react";

import { useHeader } from "@/shared/hooks/useHeader";

import type {
    TransactionFilter,
} from "@/entities/transaction/model";

import type {
    TransactionSort,
} from "@/entities/transaction/model";

import {
    TransactionsHeader,
    TransactionsToolbar,
    TransactionsContent,
} from "./components";

import { TransactionDialog } from "@/features/transaction/components/TransactionDialog";

export function TransactionsPage() {

    useHeader({
        search: {
            visible: true,
            placeholder: "Поиск операций...",
        },
    });

    const [filter, setFilter] =
        useState<TransactionFilter>("all");

    const [sort, setSort] =
        useState<TransactionSort>("newest");

    const [
        transactionDialogOpen,
        setTransactionDialogOpen,
    ] = useState(false);

    return (
        <div className="space-y-8">

            <TransactionsHeader
                onCreate={() =>
                    setTransactionDialogOpen(true)
                }
            />

            <TransactionsToolbar
                filter={filter}
                onFilterChange={setFilter}

                sort={sort}
                onSortChange={setSort}
            />

            <TransactionsContent
                filter={filter}
                sort={sort}
            />

            <TransactionDialog
                open={transactionDialogOpen}
                onOpenChange={
                    setTransactionDialogOpen
                }
            />

        </div>
    );
}