import { useQuery } from "@tanstack/react-query";

import {
    categoryApi,
} from "../api/category.api";

import {
    toCategory,
} from "../model/category.mapper";

export function useCategories() {

    return useQuery({

        queryKey: [
            "categories",
        ],

        queryFn: async () => {

            const data =
                await categoryApi.findAll();

            return data.map(
                toCategory,
            );

        },

    });

}