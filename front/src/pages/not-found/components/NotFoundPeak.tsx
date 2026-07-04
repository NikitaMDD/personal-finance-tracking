import { motion } from "framer-motion";

interface Props {

    point: [number, number];

}

export function NotFoundPeak({
    point,
}: Props) {

    return (

        <motion.circle
            cx={point[0]}
            cy={point[1]}
            r="9"
            fill="#111827"
            initial={{
                scale: 0,
            }}
            animate={{
                scale: [0, 1.2, 1],
            }}
            transition={{
                delay: 1.65,
                duration: .4,
            }}
        />

    );

}