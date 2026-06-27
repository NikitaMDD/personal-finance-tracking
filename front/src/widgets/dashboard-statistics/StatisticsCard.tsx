import {
    motion,
} from "framer-motion";

import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

interface Props {

    title: string;

    value: string;

}

export function StatisticsCard({
    title,
    value,
}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-6
            "
        >

            <Typography
                variant="small"
                className="
                    text-[var(--color-text-secondary)]
                "
            >
                {title}
            </Typography>

            <motion.div

                key={value}

                initial={{
                    opacity: 0,
                    y: 12,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    duration: .25,
                }}

            >

                <Typography
                    variant="h2"
                    className="mt-3"
                >
                    {value}
                </Typography>

            </motion.div>

        </Card>

    );
}