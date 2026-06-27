import { useState } from "react";

import {
    accountsMock,
    type Account,
} from "@/entities/account/model";

import { AccountSlider } from "@/widgets/account-slider";
import { DashboardStatistics } from "@/widgets/dashboard-statistics";
import { RecentTransactions } from "@/widgets/recent-transactions";
import { ExpensesByCategory } from "@/widgets/expenses-by-category";
import { useHeader } from "@/shared/hooks/useHeader";

export function DashboardPage() {

    const [selectedAccount, setSelectedAccount] =
        useState<Account>(accountsMock[0]);

    useHeader({
        search: {
            visible: true,
            placeholder: "Поиск операций",
        },
    });

    return (
        <div className="space-y-8">

            <AccountSlider
                accounts={accountsMock}
                selectedAccount={selectedAccount}
                onSelectAccount={setSelectedAccount}
            />

            <DashboardStatistics
                accountId={selectedAccount.id}
            />

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

                <ExpensesByCategory
                    accountId={selectedAccount.id}
                />

            </div>

        </div>
    );
}