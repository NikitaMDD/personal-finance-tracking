import { useQuery } from "@tanstack/react-query";

import { budgetApi } from "../api/budget.api";

import {
    toBudget,
} from "../model/budget.mapper";

export function useBudgets() {

    return useQuery({

        queryKey: [
            "budgets",
        ],

        queryFn: async () => {

            const response =
                await budgetApi.findAll();

            return response.map(
                toBudget,
            );

        },

    });

}