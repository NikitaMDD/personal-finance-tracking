import { Typography } from "@/shared/ui/typography";

import {
    formatDate,
} from "../lib";

interface Props {
    date: string;
}

export function TransactionDate({
    date,
}: Props) {
    return (
        <Typography
            variant="caption"
            className="
                text-[var(--color-text-secondary)]
            "
        >
            {formatDate(date)}
        </Typography>

    );
}