import {
    ArrowDownWideNarrow,
    Check,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Popover } from "@/shared/ui/popover";

import {
    TRANSACTION_SORT_OPTIONS,
} from "../config/sort-options";

import type {
    TransactionSort,
} from "@/entities/transaction/model";

interface Props {
    value: TransactionSort;
    onChange(value: TransactionSort): void;
}

export function TransactionsSort({
    value,
    onChange,
}: Props) {
    const current =
        TRANSACTION_SORT_OPTIONS.find(
            option => option.value === value,
        );
    return (
        <Popover
            trigger={
                <Button variant="secondary">
                    <ArrowDownWideNarrow size={18} />
                    {current?.label}
                </Button>
            }
        >
            <div className="w-56 p-2 space-y-1">
                {TRANSACTION_SORT_OPTIONS.map(option => (
                    <button
                        key={option.value}
                        onClick={() =>
                            onChange(option.value)
                        }
                        className="
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-xl
                            px-3
                            py-2
                            text-left
                            transition-colors
                            hover:bg-[var(--color-surface-secondary)]
                        "
                    >
                        {option.label}
                        {value === option.value && (
                            <Check size={16} />
                        )}
                    </button>
                ))}
            </div>
        </Popover>
    );
}