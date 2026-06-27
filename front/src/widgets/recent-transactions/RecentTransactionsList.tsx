import type {
    Transaction,
} from "@/entities/transaction/model";

import {
    TransactionItem,
} from "@/entities/transaction/ui";

interface Props {

    transactions: Transaction[];

}

export function RecentTransactionsList({
    transactions,
}: Props) {

    return (

        <div className="divide-y divide-[var(--color-border)]">
            {transactions.map(transaction => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>

    );
}