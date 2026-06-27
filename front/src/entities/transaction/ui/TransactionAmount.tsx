import { Typography } from "@/shared/ui/typography";

import {
    formatAmount,
} from "../lib";

import type {
    Currency,
    TransactionType,
} from "../model";

interface Props {
    amount: number;
    currency: Currency;
    type: TransactionType;
}

export function TransactionAmount({
    amount,
    currency,
    type,
}: Props) {
    return (
        <Typography
            variant="body"
            className={
                type === "income"
                    ? "text-green-600"
                    : "text-red-500"
            }
        >
            {formatAmount(
                amount,
                currency,
            )}
        </Typography>
    );
}