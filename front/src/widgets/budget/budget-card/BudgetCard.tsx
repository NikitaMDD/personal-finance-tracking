import { motion } from "framer-motion";

import { Card } from "@/shared/ui/card";

import type { Budget } from "@/entities/budget/model";

import { BudgetCardHeader } from "./BudgetCardHeader";
import { BudgetCardInfo } from "./BudgetCardInfo";
import { BudgetCardProgress } from "./BudgetCardProgress";
import { BudgetStatusFooter } from "./BudgetStatusFooter";

interface Props {
    budget: Budget;
    onEdit(): void;
    onDelete(): void;
}

export function BudgetCard({
    budget,
    onEdit,
    onDelete,
}: Props) {

    return (
        <motion.div
            layout
            whileHover={{
                y: -4,
                scale: 1.015,
            }}
            transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
            }}
        >
            <Card
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    p-6
                "
            >
                <BudgetCardProgress
                    budget={budget}
                />

                <BudgetCardHeader
                    budget={budget}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />

                <BudgetCardInfo
                    budget={budget}
                />

                <BudgetStatusFooter
                    budget={budget}
                />
            </Card>
        </motion.div>
    );
}