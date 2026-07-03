import {
    AnimatePresence,
    motion,
} from "framer-motion";

import { Typography } from "@/shared/ui/typography";

import type {
    ExpenseCategory,
} from "@/entities/analytics/model";

interface Props {
    total: number;
    hoveredCategory?: ExpenseCategory;
}

export function ExpensesPieCenter({
    total,
    hoveredCategory,
}: Props) {
    return (
        <div
            className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
            "
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={
                        hoveredCategory?.categoryId ??
                        "total"
                    }
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -8,
                    }}
                    transition={{
                        duration: .18,
                    }}
                    className="text-center"
                >
                    <Typography variant="display">
                        {(
                            hoveredCategory
                                ?.amount ??
                            total
                        ).toLocaleString("ru-RU")} ₽
                    </Typography>

                    <Typography
                        variant="caption"
                        className="
                            mt-2
                            text-[var(--color-text-secondary)]
                        "
                    >
                        {hoveredCategory
                            ?.title ??
                            "Общие расходы"}
                    </Typography>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}