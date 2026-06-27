import type {
    Transaction,
} from "../model";

import {
    TransactionItem,
} from "./TransactionItem";

interface Props {
    transactions: Transaction[];
}

export function TransactionList({
    transactions,
}: Props) {

    return (
        <div
            className="
                space-y-3
            "
        >
            {transactions.map(transaction => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
}