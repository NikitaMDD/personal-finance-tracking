import { motion } from "framer-motion";

import { Progress } from "@/shared/ui/progress";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import { ICON_MAP } from "@/shared/ui/icon-picker/icons";

import type {
    ExpenseCategory,
} from "@/entities/analytics/model";

interface Props {
    category: ExpenseCategory;
    active: boolean;
    onMouseEnter(): void;
    onMouseLeave(): void;
}

export function TopCategoryItem({
    category,
    active,
    onMouseEnter,
    onMouseLeave,
}: Props) {

    const Icon =
        ICON_MAP[category.icon];

    return (
        <motion.div
            layout
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            animate={{
                scale:
                    active
                        ? 1.02
                        : 1,
                x:
                    active
                        ? 8
                        : 0,
                backgroundColor:
                    active
                        ? `${category.color}10`
                        : "transparent",
                boxShadow:
                    active
                        ? "0 8px 20px rgba(0,0,0,.06)"
                        : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{
                type: "spring",
                stiffness: 320,
                damping: 28,
            }}
            className="
                rounded-2xl
                p-3
            "
        >
            <Stack gap="sm">
                <Stack
                    direction="row"
                    justify="between"
                    align="center"
                >
                    <Stack
                        direction="row"
                        align="center"
                        gap="sm"
                    >
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                            "
                            style={{
                                background:
                                    `${category.color}15`,
                            }}
                        >
                            <Icon
                                size={20}
                                color={category.color}
                            />
                        </div>

                        <Typography>
                            {category.title}
                        </Typography>
                    </Stack>

                    <Typography
                        variant="h3"
                    >
                        {category.amount.toLocaleString("ru-RU")} ₽
                    </Typography>
                </Stack>

                <Progress
                    value={category.percent}
                    color={category.color}
                />
            </Stack>
        </motion.div>
    );
}