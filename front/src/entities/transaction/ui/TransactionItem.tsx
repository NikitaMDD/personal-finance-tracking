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

    onClick(
        transaction: Transaction,
    ): void;

}

export function TransactionItem({
    transaction,
    onClick,
}: Props) {

    return (

        <motion.div

            className="
                flex
                cursor-pointer
                items-center
                justify-between

                rounded-2xl
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

            onClick={() =>
                onClick(transaction)
            }

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

                    <Typography
                        variant="caption"
                        className="
                            text-[var(--color-text-secondary)]
                        "
                    >
                        {transaction.categoryName}
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