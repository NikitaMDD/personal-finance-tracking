import { accountsMock } from "@/entities/account/model";
import { AccountCard } from "@/entities/account/ui";

export function AccountSlider() {
    return (
        <div className="flex gap-6 overflow-x-auto mr-3 pb-4">
            {accountsMock.map((account) => (
                <AccountCard 
                    key={account.id}
                    account={account}
                />
            ))}
        </div>
    )
}