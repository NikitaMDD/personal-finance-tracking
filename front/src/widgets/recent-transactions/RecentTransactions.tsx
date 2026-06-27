import { transactionsMock } from "@/entities/transaction/model";

import { Card } from "@/shared/ui/card";

import { RecentTransactionsHeader } from "./RecentTransactionsHeader";
import { RecentTransactionsList } from "./RecentTransactionsList";

import {
    filterTransactionsByAccount,
} from "@/entities/transaction";

interface RecentTransactionsProps {
    accountId: string;
}

export function RecentTransactions({
    accountId,
}: RecentTransactionsProps) {

    const transactions =
        filterTransactionsByAccount(
            transactionsMock,
            accountId,
        ).slice(0, 5);

    return (
        <Card className="rounded-3xl p-6">

            <RecentTransactionsHeader />

            <RecentTransactionsList
                transactions={transactions}
            />

        </Card>
    );
}