import type { BudgetPeriod } from "../model";

export function getBudgetDateRange(
    period: BudgetPeriod,
) {

    const now = new Date();

    const start = new Date(now);
    const end = new Date(now);

    switch (period) {

        case "week": {

            const day = now.getDay() || 7;

            start.setDate(now.getDate() - day + 1);

            end.setDate(start.getDate() + 6);

            break;
        }

        case "month": {

            start.setDate(1);

            end.setMonth(now.getMonth() + 1);
            end.setDate(0);

            break;
        }

        case "year": {

            start.setMonth(0, 1);

            end.setMonth(11, 31);

            break;
        }

    }

    return {

        startDate:
            start
                .toISOString()
                .split("T")[0],

        endDate:
            end
                .toISOString()
                .split("T")[0],

    };

}