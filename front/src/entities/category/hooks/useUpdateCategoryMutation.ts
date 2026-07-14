import { useMutation } from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    categoryApi,
} from "../api/category.api";

import type {
    CategoryFormValues,
} from "@/pages/categories/forms/category.schema";

interface UpdateCategoryRequest {

    id: string;

    data: CategoryFormValues;

}

export function useUpdateCategoryMutation() {

    return useMutation({

        mutationFn:
            ({
                id,
                data,
            }: UpdateCategoryRequest) =>
                categoryApi.update(
                    id,
                    data,
                ),

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