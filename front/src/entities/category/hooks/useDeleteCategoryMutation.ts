import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    categoryApi,
} from "../api/category.api";

export function useDeleteCategoryMutation() {

    return useMutation({

        mutationFn:
            categoryApi.delete,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["categories"],
            });

            queryClient.invalidateQueries({
                queryKey: ["transactions"],
            });

            queryClient.invalidateQueries({
                queryKey: ["analytics-categories"],
            });
        },

    });

}