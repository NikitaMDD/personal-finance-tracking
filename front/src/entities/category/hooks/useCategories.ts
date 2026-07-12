import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/category.api";

export function useCategories() {
    return useQuery({
        queryKey: [
            "categories",
        ],
        queryFn:
            categoryApi.findAll,
    });
}