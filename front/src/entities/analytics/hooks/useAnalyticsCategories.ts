import { useQuery } from "@tanstack/react-query";

import { analyticsApi } from "../api/analytics.api";

import {
    toExpenseCategories,
} from "../model/analytics.mapper";

import {
    getAnalyticsRange,
} from "../lib/getAnalyticsRange";

import type {
    AnalyticsPeriod,
} from "../model";

export function useAnalyticsCategories(
    period: AnalyticsPeriod,
) {

    const range =
        getAnalyticsRange(
            period,
        );

    return useQuery({

        queryKey: [
            "analytics-categories",
            period,
        ],

        queryFn: async () => {

            const data =
                await analyticsApi.categories(

                    range.from,
                    range.to,

                );

            return toExpenseCategories(
                data,
            );

        },

    });

}