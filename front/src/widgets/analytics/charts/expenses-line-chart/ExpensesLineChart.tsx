import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { motion } from "framer-motion";

import { ChartCard } from "@/shared/ui/chart-card";

import type {
    DailyExpense,
} from "@/entities/analytics/model";

import { ExpensesLineTooltip } from "./ExpensesLineTooltip";

import {
    GRID_COLOR,
    LINE_COLOR,
} from "./expenses-line.styles";

interface Props {
    data: DailyExpense[];
    hoveredCategory?: string;
}

export function ExpensesLineChart({
    data,
}: Props) {

    return (
        <motion.div layout>
            <ChartCard
                title="Расходы по дням"
                subtitle="Последние 7 дней"
            >
                <ResponsiveContainer
                    width="100%"
                    height={320}
                >
                    <LineChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="4 4"
                            stroke={GRID_COLOR}
                        />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            content={
                                <ExpensesLineTooltip />
                            }
                        />
                        <Line
                            type="monotone"
                            dataKey="amount"
                            stroke={LINE_COLOR}
                            strokeWidth={3}
                            dot={{
                                r: 5,
                            }}
                            activeDot={{
                                r: 7,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>
        </motion.div>
    );
}