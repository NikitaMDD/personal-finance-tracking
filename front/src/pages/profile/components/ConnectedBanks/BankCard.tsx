import { motion } from "framer-motion";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import type {
    ConnectedBank,
} from "@/entities/profile/model";

import { BankStatusBadge } from "./BankStatusBadge";

interface Props {

    bank: ConnectedBank;

    onConnect(): void;

    onManage(
        bank: ConnectedBank,
    ): void;

}

export function BankCard({
    bank,
    onConnect,
    onManage,
}: Props) {

    return (

        <motion.div
            whileHover={{
                y: -4,
            }}
            transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
            }}
        >

            <Card
                className="
                    h-full
                    rounded-3xl
                    p-6
                "
            >

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[var(--color-surface-secondary)]
                    "
                >
                    <img
                        src={bank.logo}
                        alt={bank.title}
                        className="
                            h-8
                            w-auto
                        "
                    />
                </div>

                <Typography
                    variant="h3"
                    className="mt-5"
                >
                    {bank.title}
                </Typography>

                <div className="mt-4">
                    <BankStatusBadge
                        connected={
                            bank.connected
                        }
                    />
                </div>

                <Button
                    className="mt-6 w-full"
                    variant={
                        bank.connected
                            ? "secondary"
                            : "primary"
                    }
                    onClick={() => {

                        if (bank.connected) {

                            onManage(bank);

                            return;

                        }

                        onConnect();

                    }}
                >
                    {bank.connected
                        ? "Управление"
                        : "Подключить"}
                </Button>

            </Card>

        </motion.div>

    );

}