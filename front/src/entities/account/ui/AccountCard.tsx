import { Card } from "@/shared/ui/card";
import { cn } from "@/shared/lib/cn";

import { getAccountMeta } from "../lib";
import type { Account } from "../model";

import { ACCOUNT_CARD_SIZES } from "./account-card.config";

import { AccountCardHeader } from "./AccountCardHeader";
import { AccountCardDivider } from "./AccountCardDivider";
import { AccountCardBalance } from "./AccountCardBalance";
import { AccountCardFooter } from "./AccountCardFooter";

interface AccountCardProps {
    account: Account;
    size?: keyof typeof ACCOUNT_CARD_SIZES;
}

export function AccountCard({
    account,
    size = "lg",
}: AccountCardProps) {

    const meta = getAccountMeta(account);

    const currentSize = ACCOUNT_CARD_SIZES[size];

    return (
        <Card
            className={cn(
                currentSize.card,
                "shrink-0 overflow-hidden rounded-3xl p-6",
            )}
        >
            <AccountCardHeader
                meta={meta}
                size={size}
            />

            <AccountCardDivider
                color={meta.color}
            />

            <AccountCardBalance
                account={account}
                size={size}
            />

            <AccountCardDivider
                color={meta.color}
            />

            <AccountCardFooter
                text={meta.footer}
            />
        </Card>
    );
}