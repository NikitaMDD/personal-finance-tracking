import { Typography } from "@/shared/ui/typography";
import { formatAmount } from "@/entities/transaction";

import type {
    ExpenseCategory,
} from "./category.types";

import { motion } from "framer-motion";

interface Props {
    category: ExpenseCategory;
}

export function CategoryItem({
    category,
}: Props) {

    return (
        <div className="space-y-2">
            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <Typography variant="body">
                    {category.title}
                </Typography>

                <Typography variant="small">
                    {formatAmount(
                        category.amount,
                        "RUB",
                    )}
                </Typography>

            </div>

            <div
                className="
                    mt-2
                    flex
                    items-center
                    gap-3
                "
            >

                <div
                    className="
                        h-2
                        flex-1
                        rounded-full
                        bg-[var(--color-surface-secondary)]
                    "
                >

                <motion.div

                    className="
                        h-full
                        rounded-full
                    "

                    initial={{
                        width: 0,
                    }}

                    animate={{
                        width: `${category.percent}%`,
                    }}

                    transition={{
                        duration: .6,
                        ease: "easeOut",
                    }}

                    style={{
                        background: category.color,
                    }}

                />

                </div>

                <motion.div
                    key={category.percent}
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                >
                    <Typography
                        variant="caption"
                    >
                        {category.percent}%
                    </Typography>
                </motion.div>

            </div>
        </div>
    );
}