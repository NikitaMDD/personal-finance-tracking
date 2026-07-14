import { useQuery } from "@tanstack/react-query";

import { analyticsApi } from "../api/analytics.api";

import {
    toMonthlyExpenses,
} from "../model/analytics.mapper";

import {
    getAnalyticsRange,
} from "../lib/getAnalyticsRange";

import type {
    AnalyticsPeriod,
} from "../model";

export function useAnalyticsMonthly(
    period: AnalyticsPeriod,
) {

    const range =
        getAnalyticsRange(
            period,
        );

    return useQuery({

        queryKey: [
            "analytics-monthly",
            period,
        ],

        queryFn: async () => {

            const data =
                await analyticsApi.monthly(

                    range.from,

                    range.to,

                );

            return toMonthlyExpenses(
                data,
            );

        },

    });

}