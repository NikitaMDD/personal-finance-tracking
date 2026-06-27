import type {
    TransactionFilter,
} from "@/entities/transaction/model";

import type {
    TransactionSort,
} from "@/entities/transaction/model";

import { TransactionsFilters } from "./TransactionsFilters";
import { TransactionsSort } from "./TransactionsSort";

interface Props {
    filter: TransactionFilter;
    onFilterChange(
        value: TransactionFilter,
    ): void;
    sort: TransactionSort;
    onSortChange(
        value: TransactionSort,
    ): void;
}

export function TransactionsToolbar({
    filter,
    onFilterChange,
    sort,
    onSortChange,
}: Props) {
    return (
        <div
            className="
                flex
                flex-col
                gap-4

                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >
            <TransactionsFilters
                value={filter}
                onChange={onFilterChange}
            />
            <TransactionsSort
                value={sort}
                onChange={onSortChange}
            />
        </div>
    );
}