import { cn } from "@/shared/lib/cn";

import { TRANSACTION_ICONS } from "./transaction-icon.config";

interface Props {
    categoryId: string;
}

export function TransactionIcon({
    categoryId,
}: Props) {

    const Icon =
        TRANSACTION_ICONS[
            categoryId
        ] ?? TRANSACTION_ICONS.other;

    return (
        <div
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[var(--color-surface-secondary)]
            "
        >
            <Icon size={20}/>
        </div>
    );
}