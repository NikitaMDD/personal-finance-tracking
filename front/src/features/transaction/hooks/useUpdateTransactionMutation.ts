import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    transactionApi,
} from "@/entities/transaction/api/transaction.api";

import type {
    TransactionForm,
} from "../model/transaction-form.types";

interface UpdateTransactionRequest {

    id: string;

    data: TransactionForm;

}

export function useUpdateTransactionMutation() {

    return useMutation({

        mutationFn:
            ({ id, data }: UpdateTransactionRequest) =>
                transactionApi.update(
                    id,
                    data,
                ),

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