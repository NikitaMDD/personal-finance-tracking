import {
    useCrudDialogs,
} from "@/shared/hooks/useCrudDialogs";

import {
    useCurrentUser,
} from "@/entities/user/hooks/useCurrentUser";

import {
    useProfileStatistics,
} from "@/entities/user/hooks/useProfileStatistics";

import {
    useUpdateUserMutation,
} from "@/entities/user/hooks/useUpdateUserMutation";

import {
    useBankConnections,
} from "@/entities/bank-connection/hooks/useBankConnections";

import {
    useDisconnectBankMutation,
} from "@/entities/bank-connection/hooks/useDisconnectBankMutation";

import {
    toConnectedBank,
} from "@/entities/bank-connection/model/bankConnection.mapper";

import {
    toUpdateUserRequest,
} from "@/entities/user/model/user.mapper";

import {useState} from "react"

import type {
    ConnectedBank,
    UserProfile,
} from "@/entities/profile/model";

import type {
    ProfileFormValues,
} from "../forms/profile.schema";

export function useProfile() {

    const dialogs =
        useCrudDialogs<UserProfile>();

    const bankDialogs =
        useCrudDialogs<ConnectedBank>();

    const profileQuery =
        useCurrentUser();

    const statisticsQuery =
        useProfileStatistics();

    const banksQuery =
        useBankConnections();

    const updateMutation =
        useUpdateUserMutation();

    const disconnectMutation =
        useDisconnectBankMutation();

    async function updateProfile(
        values: ProfileFormValues,
    ) {

        await updateMutation.mutateAsync(
            toUpdateUserRequest(
                values,
            ),
        );

        dialogs.edit.closeDialog();

    }

    async function disconnectBank(
        id: string,
    ) {

        await disconnectMutation.mutateAsync(
            id,
        );

        bankDialogs.edit.closeDialog();

    }

    const [

        connectDialogOpen,

        setConnectDialogOpen,

    ] = useState(false);

    function connectBank() {

        setConnectDialogOpen(true);

    }

    return {

        profile:
            profileQuery.data,

        statistics:
            statisticsQuery.data,

        banks:
            banksQuery.data?.map(
                toConnectedBank,
            ) ?? [],

        security: null,

        isLoading:
            profileQuery.isLoading ||
            statisticsQuery.isLoading ||
            banksQuery.isLoading,

        ...dialogs,

        bank: bankDialogs,

        updateProfile,

        connectBank,

        disconnectBank,

        connectDialogOpen,

        setConnectDialogOpen,

    };

}