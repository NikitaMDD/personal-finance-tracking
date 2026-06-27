import { Typography } from "@/shared/ui/typography";

import { formatCurrency } from "@/shared/utils/formatCurrency";

import type { Account } from "../model";

interface AccountCardBalanceProps {
    account: Account;
}

export function AccountCardBalance({
    account,
}: AccountCardBalanceProps) {
    return (
        <div className="my-6">
            <Typography
                variant="caption"
                className="text-[var(--color-text-secondary)]"
            >
                Баланс
            </Typography>

            <Typography
                as="h2"
                variant="display"
                className="mt-2"
            >
                {formatCurrency(
                    account.balance,
                    account.currency,
                )}
            </Typography>
        </div>
    );
}