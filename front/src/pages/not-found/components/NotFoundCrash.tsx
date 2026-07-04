import { motion } from "framer-motion";

interface Props {
    fall: [number, number][];
}

export function NotFoundCrash({
    fall,
}: Props) {

    const point =
        fall[Math.max(0, fall.length - 2)];

    return (

        <motion.g
            transform={`translate(${point[0]}, ${point[1]})`}
            initial={{
                opacity: 0,
                scale: 0,
                rotate: -20,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
            }}
            transition={{
                delay: 2.45,
                type: "spring",
                stiffness: 260,
                damping: 18,
            }}
        >
            <circle
                r="22"
                fill="white"
                stroke="#EF4444"
                strokeWidth="4"
            />

            <line
                x1="-10"
                y1="-10"
                x2="10"
                y2="10"
                stroke="#EF4444"
                strokeWidth="4"
                strokeLinecap="round"
            />

            <line
                x1="10"
                y1="-10"
                x2="-10"
                y2="10"
                stroke="#EF4444"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </motion.g>

    );

}