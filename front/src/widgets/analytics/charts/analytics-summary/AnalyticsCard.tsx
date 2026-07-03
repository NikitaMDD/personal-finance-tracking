import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";
import { Stack } from "@/shared/ui/stack";

import type { ReactNode } from "react";

interface Props {
    title: string;
    value: string;
    icon: ReactNode;
    color: string;
}

export function AnalyticsCard({
    title,
    value,
    icon,
    color,
}: Props) {

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={`${title}-${value}`}
                initial={{
                    opacity: 0,
                    y: 8,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -8,
                }}
                transition={{
                    duration: .18,
                }}
            >
                <Card className="rounded-3xl p-6">
                    <Stack
                        direction="row"
                        justify="between"
                        align="start"
                    >
                        <div>
                            <Typography
                                variant="caption"
                                className="
                                    text-[var(--color-text-secondary)]
                                "
                            >
                                {title}
                            </Typography>

                            <Typography
                                variant="display"
                                className="mt-2"
                            >
                                {value}
                            </Typography>
                        </div>

                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                            "
                            style={{
                                background: `${color}15`,
                            }}
                        >
                            {icon}
                        </div>
                    </Stack>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}