import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";

import { motion } from "framer-motion";

import { ChartCard } from "@/shared/ui/chart-card";

import type {
    MonthlyExpense,
} from "@/entities/analytics/model";

import { IncomeExpenseTooltip } from "./IncomeExpenseTooltip";

import {
    GRID_COLOR,
    INCOME_COLOR,
    EXPENSE_COLOR,
} from "./income-expense.styles";

interface Props {
    data: MonthlyExpense[];
}

export function IncomeExpenseBarChart({
    data,
}: Props) {
    return (
        <motion.div layout>
            <ChartCard
                title="Доходы и расходы"
                subtitle="Последние 6 месяцев"
            >
                <ResponsiveContainer
                    width="100%"
                    height={360}
                >
                    <BarChart
                        data={data}
                    >
                        <CartesianGrid
                            strokeDasharray="4 4"
                            stroke={GRID_COLOR}
                        />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            content={
                                <IncomeExpenseTooltip />
                            }
                        />
                        <Legend />
                        <Bar
                            dataKey="income"
                            name="Доход"
                            fill={INCOME_COLOR}
                            radius={[8, 8, 0, 0]}
                        />
                        <Bar
                            dataKey="expenses"
                            name="Расход"
                            fill={EXPENSE_COLOR}
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>
        </motion.div>
    );
}