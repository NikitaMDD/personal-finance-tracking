import { api } from "@/shared/api/client/http";

import type {
    CategoryResponse,
} from "../model/category-response.types";

export const categoryApi = {
    findAll() {
        return api<CategoryResponse[]>(
            "/categories",
        );
    },
};