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


import type {
    TransactionForm,
} from "@/features/transaction/model/transaction-form.types";

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

    create(
        data: TransactionForm,
    ) {

        return api<TransactionResponse>(
            "/transactions",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );

    },

    update(
        id: string,
        data: TransactionForm,
    ) {

        return api<TransactionResponse>(
            `/transactions/${id}`,
            {
                method: "PATCH",
                body: JSON.stringify(data),
            },
        );

    },

    delete(
        id: string,
    ) {

        return api<void>(
            `/transactions/${id}`,
            {
                method: "DELETE",
            },
        );

    },

};