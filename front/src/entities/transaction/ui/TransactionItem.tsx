import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import type {
    Transaction,
} from "../model";

import {
    TransactionAmount,
} from "./TransactionAmount";

import {
    TransactionDate,
} from "./TransactionDate";

import {
    TransactionIcon,
} from "./TransactionIcon";

import { motion } from "framer-motion";

interface Props {
    transaction: Transaction;
}

export function TransactionItem({
    transaction,
}: Props) {

    return (
        <motion.div
            className="
                flex
                items-center
                justify-between

                py-4

                transition-colors

                hover:bg-[var(--color-surface-secondary)]
            "
            initial={{
                opacity: 0,
                x: -20,
            }}

            animate={{
                opacity: 1,
                x: 0,
            }}

            exit={{
                opacity: 0,
                x: 20,
            }}

            transition={{
                duration: .2,
            }}
        >
            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >
                <TransactionIcon
                    categoryId={
                        transaction.categoryId
                    }
                />

                <div>
                    <Typography
                        variant="body"
                    >
                        {transaction.title}
                    </Typography>

                    <TransactionDate
                        date={transaction.date}
                    />
                </div>
            </div>

            <TransactionAmount
                amount={transaction.amount}
                currency={transaction.currency}
                type={transaction.type}
            />
        </motion.div>
    );
}