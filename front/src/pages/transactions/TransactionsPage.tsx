import { Typography } from "@/shared/ui/typography";

import {
    TransactionList,
} from "@/entities/transaction/ui";

import {
    transactionsMock,
} from "@/entities/transaction/model";

export function TransactionsPage() {

    return (

        <section className="space-y-8">
            <Typography
                as="h1"
                variant="h1"
            >
                Транзакции
            </Typography>
            <TransactionList
                transactions={transactionsMock}
            />
        </section>

    );
}