import { motion } from "framer-motion";

import {
    formatAmount,
} from "@/entities/transaction";

import {
    useTransactionStatistics,
} from "@/entities/transaction/hooks/useTransactionStatistics";

import { StatisticsCard } from "./StatisticsCard";

import { AnimatePresence } from "framer-motion";

export function DashboardStatistics() {

    const {
        data,
        isLoading,
    } = useTransactionStatistics();
    
    if (isLoading || !data) {
        return null;
    }

    const cards = [

        {
            title: "Доход",
            value: formatAmount(
                data.income,
                "RUB",
            ),
        },

        {
            title: "Расход",
            value: formatAmount(
                data.expense,
                "RUB",
            ),
        },

        {
            title: "Баланс",
            value: formatAmount(
                data.balance,
                "RUB",
            ),
        },

        {
            title: "Экономия",
            value: `${data.savings}%`,
        },

    ];

    return (

        <section
            className="
                grid
                grid-cols-1
                gap-6

                md:grid-cols-2

                xl:grid-cols-4
            "
        >

            <AnimatePresence>

                {cards.map(card => (

                    <motion.div
                        key={card.title}
                        layout
                    >

                        <StatisticsCard
                            title={card.title}
                            value={card.value}
                        />

                    </motion.div>

                ))}

            </AnimatePresence>

        </section>

    );

}