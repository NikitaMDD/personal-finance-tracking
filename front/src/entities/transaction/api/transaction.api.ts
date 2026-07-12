import { api } from "@/shared/api/client/http";

import type {
    TransactionResponse,
} from "../model/transaction-response.types";

import type {
    TransactionStatistics,
} from "../model/transaction-statistics.types";

import type {
    CategoryStatistics
} from "../model/category-statistics.types";

export const transactionApi = {

    findAll() {

        return api<TransactionResponse[]>(
            "/transactions",
        );

    },

    statistics() {

        return api<TransactionStatistics>(
            "/transactions/statistics",
        );

    },

    categoryStatistics() {

        return api<CategoryStatistics[]>(

            "/transactions/statistics/categories",

        );

    },

};