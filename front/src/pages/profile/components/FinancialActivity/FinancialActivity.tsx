import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import type {
    ProfileStatistics,
} from "@/entities/profile/model";

import { formatCurrency } from "@/shared/utils/formatCurrency";

import { FinancialMetric } from "./FinancialMetric";
import { FinancialActivityBar } from "./FinancialActivityBar";

interface Props {

    statistics: ProfileStatistics;

}

export function FinancialActivity({
    statistics,
}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-8
            "
        >

            <Typography variant="h2">
                Финансовая активность
            </Typography>

            <div
                className="
                    mt-8
                    grid
                    gap-8
                    md:grid-cols-3
                "
            >

                <FinancialMetric
                    label="Доходы"
                    value={formatCurrency(
                        statistics.income,
                        "RUB"
                    )}
                    color="var(--color-success)"
                />

                <FinancialMetric
                    label="Расходы"
                    value={formatCurrency(
                        statistics.expenses,
                        "RUB"
                    )}
                    color="var(--color-danger)"
                />

                <FinancialMetric
                    label="Баланс"
                    value={formatCurrency(
                        statistics.balance,
                        "RUB"
                    )}
                    color="var(--color-primary)"
                />

            </div>

            <FinancialActivityBar
                income={statistics.income}
                expenses={statistics.expenses}
            />

        </Card>

    );

}