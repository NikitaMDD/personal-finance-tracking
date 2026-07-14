import { useQuery } from "@tanstack/react-query";

import { analyticsApi } from "../api/analytics.api";

import {
    toAnalyticsSummary,
} from "../model/analytics.mapper";

import {
    getAnalyticsRange,
} from "../lib/getAnalyticsRange";

import type {
    AnalyticsPeriod,
} from "../model";

export function useAnalyticsSummary(
    period: AnalyticsPeriod,
) {

    const range =
        getAnalyticsRange(
            period,
        );

    return useQuery({

        queryKey: [
            "analytics-summary",
            period,
        ],

        queryFn: async () => {

            const data =
                await analyticsApi.summary(

                    range.from,
                    range.to,

                );

            return toAnalyticsSummary(
                data,
            );

        },

    });

}