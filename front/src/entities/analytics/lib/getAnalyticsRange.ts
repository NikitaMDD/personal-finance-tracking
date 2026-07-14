import type {
    AnalyticsPeriod,
} from "../model";

export function getAnalyticsRange(
    period: AnalyticsPeriod,
) {

    const to =
        new Date();

    const from =
        new Date();

    switch (period) {
        case "week":
            from.setDate(
                to.getDate() - 7,
            );
            break;

        case "month":
            from.setMonth(
                to.getMonth() - 1,
            );
            break;

        case "year":
            from.setFullYear(
                to.getFullYear() - 1,
            );

            break;

    }

    return {
        from:
            from
                .toISOString()
                .slice(0,10),
        to:
            to
                .toISOString()
                .slice(0,10),
    };
}