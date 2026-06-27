import { accountsMock, type Account  } from "@/entities/account/model";

import { AccountSliderHeader } from "./AccountSliderHeader";
import { AccountSliderControls } from "./AccountSliderControls";
import { AccountSliderDots } from "./AccountSliderDots";
import { AccountSliderList } from "./AccountSliderList";

import { useAccountSlider } from "./hooks/useAccountSlider";

interface AccountSliderProps {
    accounts: Account[];
    selectedAccount: Account;
    onSelectAccount(
        account: Account,
    ): void;
}

export function AccountSlider({
    accounts,
    selectedAccount,
    onSelectAccount,
}: AccountSliderProps) {

    const slider = useAccountSlider(
        accounts.length,
    );

    return (

        <section className="space-y-6">
            <AccountSliderHeader>
                <AccountSliderControls
                    slider={slider}
                />
            </AccountSliderHeader>

            <AccountSliderList
                slider={slider}
                accounts={accounts}
                selectedAccount={selectedAccount}
                onSelectAccount={onSelectAccount}
            />

            <AccountSliderDots
                slider={slider}
                count={accounts.length}
            />

        </section>

    );
}