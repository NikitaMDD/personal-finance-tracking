import { useQuery } from "@tanstack/react-query";

import { analyticsApi } from "../api/analytics.api";

import {
    toDailyExpenses,
} from "../model/analytics.mapper";

import {
    getAnalyticsRange,
} from "../lib/getAnalyticsRange";

import type {
    AnalyticsPeriod,
} from "../model";

export function useAnalyticsDaily(
    period: AnalyticsPeriod,
) {

    const range =
        getAnalyticsRange(
            period,
        );

    return useQuery({

        queryKey: [
            "analytics-daily",
            period,
        ],

        queryFn: async () => {

            const data =
                await analyticsApi.daily(

                    range.from,
                    range.to,

                );

            return toDailyExpenses(
                data,
            );

        },

    });

}