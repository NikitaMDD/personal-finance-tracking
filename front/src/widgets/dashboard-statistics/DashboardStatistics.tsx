import {
    transactionsMock,
} from "@/entities/transaction/model";

import {
    getDashboardStatistics,
    formatAmount,
} from "@/entities/transaction";

import { StatisticsCard } from "./StatisticsCard";

import {
    filterTransactionsByAccount,
} from "@/entities/transaction";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
    accountId: string;
}

export function DashboardStatistics({
    accountId,
}: Props) {

    const transactions =
        filterTransactionsByAccount(
            transactionsMock,
            accountId,
        );

    const statistics =
        getDashboardStatistics(
            transactions,
        );

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

            <motion.div layout>

                <StatisticsCard
                    title="Доход"
                    value={formatAmount(
                        statistics.income,
                        "RUB",
                    )}
                />

            </motion.div>

            <motion.div layout>

                <StatisticsCard
                    title="Расход"
                    value={formatAmount(
                        statistics.expenses,
                        "RUB",
                    )}
                />

            </motion.div>

            <motion.div layout>

                <StatisticsCard
                    title="Баланс"
                    value={formatAmount(
                        statistics.balance,
                        "RUB",
                    )}
                />

            </motion.div>

            <motion.div layout>

                <StatisticsCard
                    title="Экономия"
                    value={`${statistics.savings}%`}
                />

            </motion.div>

        </section>
    );
}