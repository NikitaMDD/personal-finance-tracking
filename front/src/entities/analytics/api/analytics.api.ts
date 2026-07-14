import { api } from "@/shared/api/client/http";

import type {
    AnalyticsSummaryResponse,
    CategoryStatisticResponse,
    MonthlyStatisticResponse,
    DailyStatisticResponse,
} from "../model";

export const analyticsApi = {

    summary(
        from: string,
        to: string,
    ) {

        return api<AnalyticsSummaryResponse>(
            `/analytics/summary?from=${from}&to=${to}`,
        );

    },

    categories(
        from: string,
        to: string,
    ) {

        return api<CategoryStatisticResponse[]>(
            `/analytics/categories?from=${from}&to=${to}`,
        );

    },

    monthly(
        from: string,
        to: string,
    ) {

        return api<MonthlyStatisticResponse[]>(
            `/analytics/monthly?from=${from}&to=${to}`,
        );

    },

    daily(
        from: string,
        to: string,
    ) {

        return api<DailyStatisticResponse[]>(
            `/analytics/daily?from=${from}&to=${to}`,
        );

    },

};