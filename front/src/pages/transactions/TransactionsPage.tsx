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

    return (
        <div className="space-y-8">

            <TransactionsHeader />

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

        </div>
    );
}