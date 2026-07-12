import { useState, useEffect, useMemo } from "react";

import {
    type Account,
} from "@/entities/account/model";

import { AccountSlider } from "@/widgets/account-slider";
import { DashboardStatistics } from "@/widgets/dashboard-statistics";
import { RecentTransactions } from "@/widgets/recent-transactions";
import { ExpensesByCategory } from "@/widgets/expenses-by-category";
import { useHeader } from "@/shared/hooks/useHeader";
import { useDashboardAccounts } from "@/features/bank-connection/hooks/useDashboardAccounts";
import { toAccount } from "@/entities/bank-connection/model/dashboardAccount.mapper";

import {EmptyAccountsState} from "./components/EmptyAccountsState"

import {ConnectBankDialog} from "@/features/bank-connection/components/ConnectBankDialog"

export function DashboardPage() {

    const {
        data,
        isLoading,
    } = useDashboardAccounts();

    const accounts = useMemo(
        () => data?.map(toAccount) ?? [],
        [data],
    );

    const [
        selectedAccountId,
        setSelectedAccountId,
    ] = useState<string>();

    const selectedAccount = useMemo(() => {

        if (accounts.length === 0) {
            return null;
        }

        return (
            accounts.find(
                account =>
                    account.id === selectedAccountId,
            ) ??
            accounts[0]
        );

    }, [
        accounts,
        selectedAccountId,
    ]);

    useHeader({
        search: {
            visible: true,
            placeholder: "Поиск операций",
        },
    });

    const [
        connectDialogOpen,
        setConnectDialogOpen,
    ] = useState(false);

    if (isLoading) {
        return <>Загрузка...</>;
    }

    if (!selectedAccount) {
        return (

            <>
                <EmptyAccountsState
                    onConnectBank={() => {
                        setConnectDialogOpen(true)
                    }}
                />

                <ConnectBankDialog
                    open={connectDialogOpen}
                    onOpenChange={
                        setConnectDialogOpen
                    }
                />
            </>

        );
    }

    return (
        <div className="space-y-8">

            <AccountSlider
                accounts={accounts}
                selectedAccount={selectedAccount}
                onSelectAccount={(account) =>
                    setSelectedAccountId(account.id)
                }
            />

            <DashboardStatistics />

            <div
                className="
                    grid
                    gap-8

                    xl:grid-cols-[2fr_1fr]
                "
            >

                <RecentTransactions
                    accountId={selectedAccount.id}
                />

                <ExpensesByCategory/>

            </div>

        </div>
    );
}