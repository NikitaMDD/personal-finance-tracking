import { motion } from "framer-motion";

import { Progress } from "@/shared/ui/progress";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    ExpenseCategory,
} from "@/entities/analytics/model";

interface Props {
    categories: ExpenseCategory[];
    hoveredCategory?: ExpenseCategory;
    onHoverCategory(
        category?: ExpenseCategory,
    ): void;
}

export function ExpensesPieLegend({
    categories,
    hoveredCategory,
    onHoverCategory,
}: Props) {
    return (
        <Stack gap="lg">
            {categories.map(category => (
                <motion.div
                    key={category.categoryId}
                    layout
                    onMouseEnter={() =>
                        onHoverCategory(category)
                    }
                    onMouseLeave={() =>
                        onHoverCategory(undefined)
                    }
                    animate={{
                        opacity:
                            hoveredCategory &&
                            hoveredCategory.categoryId !==
                            category.categoryId
                                ? .35
                                : 1,
                        x:
                            hoveredCategory?.categoryId ===
                            category.categoryId
                                ? 8
                                : 0,
                        scale:
                            hoveredCategory?.categoryId ===
                            category.categoryId
                                ? 1.02
                                : 1,
                    }}
                    transition={{
                        type:"spring",
                        stiffness:260,
                        damping:24,
                    }}
                    whileHover={{
                        scale:1.015,
                    }}
                >
                    <div
                        className="
                            mb-2
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    h-3
                                    w-3
                                    rounded-full
                                "
                                style={{
                                    background:
                                        category.color,
                                }}
                            />

                            <Typography>
                                {category.title}
                            </Typography>
                        </div>

                        <Typography>
                            {category.amount.toLocaleString("ru-RU")} ₽
                        </Typography>
                    </div>

                    <Progress
                        value={category.percent}
                        color={category.color}
                    />
                </motion.div>
            ))}
        </Stack>
    );
}