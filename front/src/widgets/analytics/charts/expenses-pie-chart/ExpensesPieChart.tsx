import { motion } from "framer-motion";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

import { ChartCard } from "@/shared/ui/chart-card";

import type {
    ExpenseCategory,
} from "@/entities/analytics/model";

import { ExpensesPieCenter } from "./ExpensesPieCenter";
import { ExpensesPieLegend } from "./ExpensesPieLegend";

interface Props {
    categories: ExpenseCategory[];
    hoveredCategory?: ExpenseCategory;
    onHoverCategory(
        category?: ExpenseCategory,
    ): void;
}

export function ExpensesPieChart({
    categories,
    hoveredCategory,
    onHoverCategory,
}: Props) {

    const total = categories.reduce(
        (sum, category) => sum + category.amount,
        0,
    );

    return (
        <motion.div
            layout
            transition={{
                layout: {
                    duration: .25,
                },
            }}
        >
            <ChartCard
                title="Расходы по категориям"
                subtitle="Текущий месяц"
            >
                <div
                    className="
                        grid
                        items-center
                        gap-10
                        lg:grid-cols-[340px_1fr]
                    "
                >
                    <motion.div
                        className="relative"
                        animate={{
                            scale: hoveredCategory
                                ? 1.02
                                : 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 24,
                        }}
                    >
                        <ResponsiveContainer
                            width="100%"
                            height={320}
                        >
                            <PieChart>
                                <Pie
                                    data={categories}
                                    dataKey="amount"
                                    nameKey="title"
                                    innerRadius={75}
                                    outerRadius={115}
                                    paddingAngle={4}
                                    isAnimationActive
                                    animationDuration={350}
                                >
                                    {categories.map(category => (
                                        <Cell
                                            key={category.categoryId}
                                            fill={category.color}
                                            fillOpacity={
                                                !hoveredCategory ||
                                                hoveredCategory.categoryId ===
                                                    category.categoryId
                                                    ? 1
                                                    : 0.35
                                            }
                                            onMouseEnter={() =>
                                                onHoverCategory(category)
                                            }
                                            onMouseLeave={() =>
                                                onHoverCategory(undefined)
                                            }
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        <ExpensesPieCenter
                            total={total}
                            hoveredCategory={
                                hoveredCategory
                            }
                        />
                    </motion.div>

                    <ExpensesPieLegend
                        categories={categories}
                        hoveredCategory={
                            hoveredCategory
                        }
                        onHoverCategory={
                            onHoverCategory
                        }
                    />
                </div>
            </ChartCard>
        </motion.div>
    );
}