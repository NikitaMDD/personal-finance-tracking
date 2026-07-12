import type {
    Transaction,
} from "../model";

import {
    TransactionItem,
} from "./TransactionItem";

interface Props {

    transactions: Transaction[];

    onClick(
        transaction: Transaction,
    ): void;

}

export function TransactionList({
    transactions,
    onClick,
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

                    onClick={onClick}

                />

            ))}

        </div>

    );

}