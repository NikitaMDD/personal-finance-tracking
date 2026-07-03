import { motion } from "framer-motion";

import {
    AlertTriangle,
    CheckCircle2,
    Clock3,
} from "lucide-react";

import {
    calculateBudget,
} from "@/entities/budget/lib";

import {
    getBudgetStatus,
} from "@/entities/budget/lib";

import type {
    Budget,
} from "@/entities/budget/model";

interface Props {
    budget: Budget;
}

export function BudgetStatusFooter({
    budget,
}: Props) {

    const {
        remaining,
        overrun,
    } =
        calculateBudget(
            budget,
        );

    const status = getBudgetStatus(budget,);

    const config = {
        normal: {
            icon: CheckCircle2,
            bg: "#DCFCE7",
            color: "#15803D",
            text:
                `Осталось ${remaining.toLocaleString("ru-RU")} ₽`,
        },
        warning: {
            icon: Clock3,
            bg: "#FEF3C7",
            color: "#D97706",
            text:
                `Осталось ${remaining.toLocaleString("ru-RU")} ₽`,
        },
        danger: {
            icon: AlertTriangle,
            bg: "#FEE2E2",
            color: "#DC2626",
            text:
                `Осталось ${remaining.toLocaleString("ru-RU")} ₽`,
        },
        overrun: {
            icon: AlertTriangle,
            bg: "#FEE2E2",
            color: "#DC2626",
            text:
                `Перерасход +${overrun.toLocaleString("ru-RU")} ₽`,
        },
    }[status];

    const Icon =
        config.icon;

    return (

        <motion.div
            layout
            animate={{
                backgroundColor:
                    config.bg,
            }}

            transition={{
                duration: .25,
            }}

            className="
                -mx-6
                -mb-6
                mt-6
                flex
                items-center
                gap-3
                rounded-b-3xl
                px-6
                py-4
            "

        >
            <Icon
                size={18}
                color={config.color}
            />

            <span
                style={{
                    color:
                        config.color,
                }}
                className="
                    text-sm
                    font-medium
                "
            >
                {config.text}
            </span>
        </motion.div>
    );
}