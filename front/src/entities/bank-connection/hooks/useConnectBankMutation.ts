import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    bankConnectionApi,
} from "../api/bankConnection.api";

import type {
    ConnectBankRequest,
} from "@/features/bank-connection/model/connect-bank.types";

export function useConnectBankMutation() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: (
            data: ConnectBankRequest,
        ) =>
            bankConnectionApi.connect(
                data,
            ),

        onSuccess() {

            queryClient.invalidateQueries({
                queryKey: [
                    "bank-connections",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "dashboard-accounts",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "profile-statistics",
                ],
            });

        },

    });

}