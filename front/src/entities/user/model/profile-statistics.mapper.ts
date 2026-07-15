import type {
    ProfileStatisticsResponse,
} from "./profile-statistics-response.types";

import type {
    ProfileStatistics,
} from "@/entities/profile/model";

export function toProfileStatistics(
    response: ProfileStatisticsResponse,
): ProfileStatistics {

    return {

        accounts: response.accounts,

        categories: response.categories,

        budgets: response.budgets,

        operations: response.operations,

        income: response.income,

        expenses: response.expense,

        balance: response.balance,

    };

}