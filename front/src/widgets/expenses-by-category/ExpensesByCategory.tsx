import {
    transactionsMock,
    filterTransactionsByAccount,
    getExpensesByCategory,
} from "@/entities/transaction";

import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import { CategoryItem } from "./CategoryItem";

import { motion } from "framer-motion";

interface Props {
    accountId: string;
}

export function ExpensesByCategory({
    accountId,
}: Props) {

    const transactions =
        filterTransactionsByAccount(
            transactionsMock,
            accountId,
        );
    
    const categories =
        getExpensesByCategory(
            transactions,
        );

    return (

        <Card
            className="
                rounded-3xl
                p-6
            "
        >
            <Typography
                variant="h2"
                className="mb-6"
            >
                Расходы по категориям
            </Typography>

            <motion.div
                layout
                className="space-y-5"
            >
                {categories.map(category => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                    />
                ))}
            </motion.div>
        </Card>
    );
}