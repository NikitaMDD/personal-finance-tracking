import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { Typography } from "@/shared/ui/typography";

interface Props {
    label: string;
    value: number;
    icon?: ReactNode;
}

export function BudgetStat({
    label,
    value,
    icon,
}: Props) {

    return (

        <motion.div
            layout
            whileHover={{
                y: -2,
            }}
            transition={{
                duration: .18,
            }}
            className="
                rounded-2xl
                bg-[var(--color-surface-secondary)]
                p-5
            "
        >
            <div
                className="
                    flex
                    items-center
                    gap-2
                "
            >
                {icon}
                <Typography
                    variant="caption"
                    className="
                        text-[var(--color-text-secondary)]
                    "
                >
                    {label}
                </Typography>
            </div>

            <Typography
                variant="h2"
                className="mt-3"
            >
                {value.toLocaleString("ru-RU")} ₽
            </Typography>
        </motion.div>
    );
}