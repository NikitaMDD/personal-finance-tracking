import { api } from "@/shared/api/client/http";

import type {
    CategoryResponse,
} from "../model/category-response.types";

import type {
    CategoryFormValues,
} from "@/pages/categories/forms/category.schema";

export const categoryApi = {

    findAll() {
        return api<CategoryResponse[]>(
            "/categories",
        );
    },

    create(
        data: CategoryFormValues,
    ) {
        return api<CategoryResponse>(
            "/categories",
            {
                method: "POST",
                body: JSON.stringify({
                    name: data.title,
                    icon: data.icon,
                    color: data.color,
                    type:
                        data.type === "income"
                            ? "INCOME"
                            : "EXPENSE",
                }),
            },
        );
    },

    update(
        id: string,
        data: CategoryFormValues,
    ) {
        return api<CategoryResponse>(
            `/categories/${id}`,
            {
                method: "PATCH",
                body: JSON.stringify({
                    name: data.title,
                    icon: data.icon,
                    color: data.color,
                    type:
                        data.type === "income"
                            ? "INCOME"
                            : "EXPENSE",
                }),
            },
        );
    },

    delete(
        id: string,
    ) {
        return api<void>(
            `/categories/${id}`,
            {
                method: "DELETE",
            },
        );
    },

};