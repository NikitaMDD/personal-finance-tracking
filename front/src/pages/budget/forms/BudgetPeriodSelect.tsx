import { Tabs } from "@/shared/ui/tabs";

interface Props {
    value: "week" | "month" | "year";
    onChange(
        value: "week" | "month" | "year",
    ): void;
}

export function BudgetPeriodSelect({
    value,
    onChange,
}: Props) {
    return (
        <Tabs
            value={value}
            onChange={onChange}
            items={[
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
            ]}
        />
    );
}