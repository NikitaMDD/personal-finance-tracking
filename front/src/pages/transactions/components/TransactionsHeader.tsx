import { Typography } from "@/shared/ui/typography";

export function TransactionsHeader() {
    return (
        <div>

            <Typography
                as="h1"
                variant="h1"
            >
                Транзакции
            </Typography>

            <Typography
                variant="body"
                className="
                    mt-2
                    text-[var(--color-text-secondary)]
                "
            >
                Все операции по вашим счетам
            </Typography>

        </div>
    );
}