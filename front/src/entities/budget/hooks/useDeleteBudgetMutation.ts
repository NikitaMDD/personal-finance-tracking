import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    budgetApi,
} from "../api/budget.api";

export function useDeleteBudgetMutation() {

    return useMutation({

        mutationFn:
            budgetApi.delete,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: [
                    "budgets",
                ],
            });

        },

    });

}