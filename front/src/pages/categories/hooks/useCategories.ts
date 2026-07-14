import {
    useCrudDialogs,
} from "@/shared/hooks/useCrudDialogs";

import {
    useCategories as useCategoriesQuery,
} from "@/entities/category/hooks/useCategories";

import type {
    Category,
} from "@/entities/category/model";

export function useCategories() {

    const dialogs =
        useCrudDialogs<Category>();

    const query =
        useCategoriesQuery();

    return {
        categories:
            query.data ?? [],
        isLoading:
            query.isLoading,
        ...dialogs,
    };
}