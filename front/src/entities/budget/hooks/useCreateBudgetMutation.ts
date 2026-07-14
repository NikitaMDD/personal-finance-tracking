import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    budgetApi,
} from "../api/budget.api";

import type {
    CreateBudgetRequest,
} from "../model/create-budget-request.types";

export function useCreateBudgetMutation() {

    return useMutation({

        mutationFn: (
            data: CreateBudgetRequest,
        ) =>
            budgetApi.create(
                data,
            ),

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: [
                    "budgets",
                ],
            });

        },

    });

}