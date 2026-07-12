import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import { CategoryItem } from "./CategoryItem";

import {
    useCategoryStatistics,
} from "@/entities/transaction/hooks/useCategoryStatistics";

import { motion } from "framer-motion";

export function ExpensesByCategory() {

    const {

        data = [],

        isLoading,

    } = useCategoryStatistics();

    if (isLoading) {

        return (
            <Card className="rounded-3xl p-6">
                Загрузка...
            </Card>
        );

    }

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

                {data.map(category => (

                    <CategoryItem
                        key={category.id}
                        category={category}
                    />

                ))}

            </motion.div>

        </Card>

    );

}