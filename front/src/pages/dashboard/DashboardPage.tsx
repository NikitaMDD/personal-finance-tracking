import { useState } from "react";

import {
    accountsMock,
    type Account,
} from "@/entities/account/model";

import { AccountSlider } from "@/widgets/account-slider";

export function DashboardPage() {

    const [selectedAccount, setSelectedAccount] =
        useState<Account>(accountsMock[0]);

    return (
        <>
            <AccountSlider
                accounts={accountsMock}
                selectedAccount={selectedAccount}
                onSelectAccount={setSelectedAccount}
            />

            {/* Проверка */}
            <pre className="mt-10">
                {JSON.stringify(selectedAccount, null, 2)}
            </pre>
        </>
    );
}