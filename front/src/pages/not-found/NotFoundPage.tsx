import { motion } from "framer-motion";

import { Typography } from "@/shared/ui/typography";

import { NotFoundBackground } from "./components/NotFoundBackground";
import { NotFoundChart } from "./components/NotFoundChart";
import { NotFoundActions } from "./components/NotFoundActions";

export function NotFoundPage() {

    return (

        <NotFoundBackground>

            <NotFoundChart />

            <motion.div
                initial={{
                    opacity: 0,
                    y: 24,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 2,
                }}
                className="
                    mt-16
                    text-center
                "
            >
                <Typography variant="display">
                    404
                </Typography>

                <Typography
                    variant="h2"
                    className="mt-8"
                >
                    Кажется,
                </Typography>

                <Typography
                    className="
                        mt-3
                        text-[var(--color-text-secondary)]
                    "
                >
                    эта страница потеряла баланс.
                </Typography>
            </motion.div>

            <NotFoundActions />

        </NotFoundBackground>

    );

}