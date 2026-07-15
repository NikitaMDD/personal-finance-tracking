import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    bankConnectionApi,
} from "../api/bankConnection.api";

export function useDisconnectBankMutation() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: (
            id: string,
        ) =>
            bankConnectionApi.disconnect(
                id,
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