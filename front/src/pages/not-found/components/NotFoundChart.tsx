import { useMemo } from "react";

import { motion } from "framer-motion";

import { generateGrowth } from "../lib/generateGrowth";
import { generateFall } from "../lib/generateFall";

import { NotFoundGrid } from "./NotFoundGrid";
import { NotFoundGraph } from "./NotFoundGraph";
import { NotFoundPeak } from "./NotFoundPeak";

export function NotFoundChart() {

    const growth = useMemo(
        () => generateGrowth(),
        [],
    );

    const fall = useMemo(
        () => generateFall(),
        [],
    );

    const peak =
        growth[growth.length - 1];

    const crash =
        fall[fall.length - 1];

    return (

        <motion.div
            initial={{
                opacity: 0,
                y: 24,
            }}
            animate={{
                opacity: 1,
                y: 0,
                x: [0, 2, -2, 1, 0],
            }}
            transition={{
                opacity: {
                    duration: .5,
                },
                y: {
                    duration: .5,
                },
                x: {
                    delay: 2.1,
                    duration: .25,
                },
            }}
        >
            <svg
                viewBox="0 0 900 420"
                className="w-full"
            >
                <NotFoundGrid />
                <NotFoundGraph
                    growth={growth}
                    fall={fall}
                />
                <NotFoundPeak
                    point={peak}
                />
                {/* <NotFoundCrash
                    fall={fall}
                /> */}
            </svg>
        </motion.div>
    );
}