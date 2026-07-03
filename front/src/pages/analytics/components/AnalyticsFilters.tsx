import { Tabs } from "@/shared/ui/tabs";

import type {
    AnalyticsPeriod,
} from "@/entities/analytics/model";

const PERIODS = [
    {
        value: "week",
        label: "Неделя",
    },
    {
        value: "month",
        label: "Месяц",
    },
    {
        value: "year",
        label: "Год",
    },
];

interface Props {
    value: AnalyticsPeriod;
    onChange(
        value: AnalyticsPeriod,
    ): void;
}
export function AnalyticsFilters({
    value,
    onChange,
}: Props) {

    return (
        <Tabs
            value={value}
            onChange={(value) =>
                onChange(
                    value as AnalyticsPeriod,
                )
            }
            items={PERIODS}
        />
    );
}