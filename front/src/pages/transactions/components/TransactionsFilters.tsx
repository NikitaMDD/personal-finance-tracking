import { Button } from "@/shared/ui/button";

import {
    TRANSACTION_FILTERS,
} from "../config/filters";

import type {TransactionFilter} from "@/entities/transaction/model";

interface Props {
    value: TransactionFilter;
    onChange(
        value: TransactionFilter,
    ): void;
}

export function TransactionsFilters({
    value,
    onChange,
}: Props) {

    return (
        <div className="flex gap-3">
            {TRANSACTION_FILTERS.map(filter => (
                <Button
                    key={filter.value}
                    variant={
                        value === filter.value
                            ? "primary"
                            : "secondary"
                    }
                    onClick={() =>
                        onChange(filter.value)
                    }
                >
                    {filter.label}
                </Button>
            ))}
        </div>
    );
}