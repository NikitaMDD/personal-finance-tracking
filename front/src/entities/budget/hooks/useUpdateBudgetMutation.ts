import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    budgetApi,
} from "../api/budget.api";

import type {
    UpdateBudgetRequest,
} from "../model/update-budget-request.types";

interface UpdateBudgetMutationRequest {

    id: string;

    data: UpdateBudgetRequest;

}

export function useUpdateBudgetMutation() {

    return useMutation({

        mutationFn: ({
            id,
            data,
        }: UpdateBudgetMutationRequest) =>
            budgetApi.update(
                id,
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