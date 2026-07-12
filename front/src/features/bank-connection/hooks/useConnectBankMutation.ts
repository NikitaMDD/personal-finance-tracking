import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/queryClient";
import { bankConnectionApi } from "@/entities/bank-connection/api/bankConnection.api";

export function useConnectBankMutation() {

    return useMutation({

        mutationFn:
            bankConnectionApi.connect,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    "dashboard-accounts",
                ],
            });
        },
    });
}