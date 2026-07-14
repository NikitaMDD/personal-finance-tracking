import { api } from "@/shared/api/client/http";

import type {
    BudgetResponse,
} from "../model/budget-response.types";

import type {
    CreateBudgetRequest,
} from "../model/create-budget-request.types";

import type {
    UpdateBudgetRequest,
} from "../model/update-budget-request.types";

export const budgetApi = {

    findAll() {
        return api<BudgetResponse[]>(
            "/budgets",
        );
    },

    create(
        data: CreateBudgetRequest,
    ) {
        return api<BudgetResponse>(
            "/budgets",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );
    },

    update(
        id: string,
        data: UpdateBudgetRequest,
    ) {
        return api<BudgetResponse>(
            `/budgets/${id}`,
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
            `/budgets/${id}`,
            {
                method: "DELETE",
            },
        );
    },

};