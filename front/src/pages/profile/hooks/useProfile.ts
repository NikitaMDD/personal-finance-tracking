import { useMemo, useState } from "react";

import {
    profileMock,
    profileStatisticsMock,
    connectedBanksMock,
    securityMock,
} from "@/entities/profile/model";

import type {
    ConnectedBank,
    UserProfile,
} from "@/entities/profile/model";

import type {
    ProfileFormValues,
} from "../forms/profile.schema";

import {
    useCrudDialogs,
} from "@/shared/hooks/useCrudDialogs";

export function useProfile() {

    const [profile, setProfile] =
        useState(profileMock);

    const [banks, setBanks] =
        useState(connectedBanksMock);

    const dialogs =
        useCrudDialogs<UserProfile>();

    const bankDialogs =
        useCrudDialogs<ConnectedBank>();

    const statistics =
        useMemo(
            () => profileStatisticsMock,
            [],
        );

    const security =
        useMemo(
            () => securityMock,
            [],
        );

    function updateProfile(
        values: ProfileFormValues,
    ) {
        setProfile(previous => ({
            ...previous,
            ...values,
        }));
        dialogs.edit.closeDialog();
    }

    function connectBank(
        id: string,
    ) {
        setBanks(previous =>
            previous.map(bank =>
                bank.id === id
                    ? {
                        ...bank,
                        connected: true,
                    }
                    : bank,
            ),
        );
    }

    function disconnectBank(
        id: string,
    ) {
        setBanks(previous =>
            previous.map(bank =>
                bank.id === id
                    ? {
                        ...bank,
                        connected: false,
                    }
                    : bank,
            ),
        );
    }

    return {
        profile,
        statistics,
        banks,
        security,
        ...dialogs,
        bank: bankDialogs,
        updateProfile,
        connectBank,
        disconnectBank,
    };
}