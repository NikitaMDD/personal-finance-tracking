import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    transactionApi,
} from "@/entities/transaction/api/transaction.api";

export function useCreateTransactionMutation() {
    return useMutation({
        mutationFn:
            transactionApi.create,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["transactions"],
            });
            queryClient.invalidateQueries({
                queryKey: ["dashboard-accounts"],
            });
            queryClient.invalidateQueries({
                queryKey: ["transaction-statistics"],
            });
            queryClient.invalidateQueries({
                queryKey: ["category-statistics"],
            });
        },
    });
}