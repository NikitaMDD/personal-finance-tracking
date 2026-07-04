import { motion } from "framer-motion";

import {
    buildGraphPath,
} from "../lib/buildGraphPath";

import {
    generateGrowth,
} from "../lib/generateGrowth";

import {
    generateFall
} from "../lib/generateFall"

interface Props {
    growth: [number, number][];
    fall: [number, number][];
}

export function NotFoundGraph({
    growth,
    fall,
}: Props) {

    const growthPath =
        buildGraphPath(growth);

    const fallPath =
        buildGraphPath(fall);

    return (

        <g>

            <defs>

                <linearGradient
                    id="growthGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop
                        offset="0%"
                        stopColor="var(--color-chart-growth-start)"
                    />

                    <stop
                        offset="100%"
                        stopColor="var(--color-chart-growth-end)"
                    />

                </linearGradient>

                <filter id="graphShadow">
                    <feDropShadow
                        dx="0"
                        dy="3"
                        stdDeviation="4"
                        floodOpacity=".18"
                    />
                </filter>

            </defs>

            <motion.path
                d={growthPath}
                fill="none"
                stroke="url(#growthGradient)"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#graphShadow)"
                initial={{
                    pathLength: 0,
                }}
                animate={{
                    pathLength: 1,
                }}
                transition={{
                    duration: 1.7,
                    ease: "easeInOut",
                }}
            />

            <motion.path
                d={fallPath}
                fill="none"
                stroke="var(--color-chart-fall)"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    pathLength: 0,
                }}
                animate={{
                    pathLength: 1,
                }}
                transition={{
                    delay: 1.95,
                    duration: .45,
                    ease: "easeIn",
                }}
            />

        </g>

    );

}