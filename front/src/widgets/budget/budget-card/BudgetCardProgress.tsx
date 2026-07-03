import { motion } from "framer-motion";

import {
    calculateBudget,
} from "@/entities/budget/lib";

import type {
    Budget,
} from "@/entities/budget/model";

interface Props {
    budget: Budget;
}

export function BudgetCardProgress({
    budget,
}: Props) {

    const {
        percent,
    } = calculateBudget(budget,);
    
    return (
        <motion.div
            className="
                absolute
                left-0
                top-0
                h-1.5
            "
            style={{
                background:
                    budget.color,
            }}
            initial={{
                width: 0,
            }}
            animate={{
                width: `${percent}%`,
            }}
            transition={{
                duration: .8,
                ease: "easeOut",
            }}
        />
    );
}