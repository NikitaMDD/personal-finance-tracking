import { useHeader } from "@/shared/hooks/useHeader";

import { useProfile } from "./hooks/useProfile";

import { ProfileHeader } from "./components/ProfileHeader";
import { UserCard } from "./components/UserCard/UserCard";
import { ProfileStats } from "./components/ProfileStats/ProfileStats";
import { FinancialActivity } from "./components/FinancialActivity/FinancialActivity";
import { ConnectedBanks } from "./components/ConnectedBanks/ConnectedBanks";
import { EditProfileDialog } from "./dialogs/EditProfileDialog"
import { ManageBankDialog } from "./dialogs/ManageBankDialog"

export function ProfilePage() {

    const profile = useProfile();

    useHeader({
        search: {
            visible: false,
            placeholder: ""
        },
    });

    return (

        <div
            className="
                space-y-8
            "
        >
            <ProfileHeader
                onEdit={() =>
                    profile.edit.openDialog(
                        profile.profile,
                    )
                }
            />

            <UserCard
                profile={profile.profile}
            />

            <ProfileStats
                statistics={profile.statistics}
            />

            <FinancialActivity
                statistics={profile.statistics}
            />

            <ConnectedBanks
                banks={profile.banks}
                onConnect={
                    profile.connectBank
                }
                onManage={
                    profile.bank.edit.openDialog
                }
            />

            <EditProfileDialog
                open={!!profile.edit.item}
                profile={profile.edit.item}
                onSubmit={profile.updateProfile}
                onOpenChange={profile.edit.closeDialog}
            />

            <ManageBankDialog
                open={
                    !!profile.bank.edit.item
                }
                bank={
                    profile.bank.edit.item
                }
                onDisconnect={
                    profile.disconnectBank
                }
                onOpenChange={
                    profile.bank.edit.closeDialog
                }
            />

        </div>
    );
}