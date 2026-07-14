import {
    AnimatePresence,
    motion,
} from "framer-motion";

import type {
    Budget,
} from "@/entities/budget/model";

import { BudgetCard }
    from "../budget-card";

import { BudgetGridEmpty }
    from "./BudgetGridEmpty";

interface Props {
    budgets: Budget[];
    onEdit(
        budget: Budget,
    ): void;
    onDelete(
        budget: Budget,
    ): void;
    onCreate(): void;
}

export function BudgetGrid({
    budgets,
    onEdit,
    onDelete,
    onCreate,
}: Props) {

    if (!budgets.length) {
        return (
            <BudgetGridEmpty
                onCreate={onCreate}
            />
        );
    }

    return (

        <motion.div
            layout
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            <AnimatePresence>
                {budgets.map(budget => (
                    <motion.div
                        key={budget.id}
                        layout
                        initial={{
                            opacity: 0,
                            y: 20,
                            scale: .96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: .96,
                        }}
                        transition={{
                            duration: .25,
                        }}
                    >
                        <BudgetCard
                            budget={budget}
                            onEdit={() =>
                                onEdit(budget)
                            }
                            onDelete={() =>
                                onDelete(budget)
                            }
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}