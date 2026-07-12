import { Card } from "@/shared/ui/card";
import { useTransactions } from "@/entities/transaction/hooks/useTransactions";

import { RecentTransactionsHeader } from "./RecentTransactionsHeader";
import { RecentTransactionsList } from "./RecentTransactionsList";

interface RecentTransactionsProps {
    accountId: string;
}

export function RecentTransactions({
    accountId,
}: RecentTransactionsProps) {

    const {
        data = [],
        isLoading,
    } = useTransactions();

    if (isLoading) {
        return (
            <Card className="rounded-3xl p-6">
                Загрузка...
            </Card>
        );
    }

    const transactions =
        data
            .filter(
                transaction =>
                    transaction.accountId === accountId,
            )
            .slice(0, 5);

    return (
        <Card className="rounded-3xl p-6">
            <RecentTransactionsHeader />
            <RecentTransactionsList
                transactions={transactions}
            />
        </Card>
    );
}