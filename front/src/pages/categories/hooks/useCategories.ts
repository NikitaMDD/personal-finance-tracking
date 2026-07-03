import {
    categoriesMock,
    type Category,
} from "@/entities/category/model";

import { useCrudDialogs } from "@/shared/hooks/useCrudDialogs";

export function useCategories() {

    const dialogs = useCrudDialogs<Category>();

    return {
        categories: categoriesMock,
        ...dialogs,
    };
}