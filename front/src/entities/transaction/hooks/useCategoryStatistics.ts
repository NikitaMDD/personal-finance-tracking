import { useQuery } from "@tanstack/react-query";

import { transactionApi } from "../api/transaction.api";

import { toExpenseCategories } from "@/entities/category/model/category.mapper";

export function useCategoryStatistics() {

    return useQuery({

        queryKey: [
            "category-statistics",
        ],

        queryFn: async () => {

            const response =
                await transactionApi.categoryStatistics();

            return toExpenseCategories(
                response,
            );

        },

    });

}