import { motion } from "framer-motion";

const vertical = [
    120,
    240,
    360,
    480,
    600,
    720,
];

const horizontal = [
    80,
    160,
    240,
    320,
];

export function NotFoundGrid() {

    return (

        <g>

            {vertical.map(x => (

                <motion.line
                    key={x}
                    x1={x}
                    y1={20}
                    x2={x}
                    y2={360}
                    stroke="#EEF2F7"
                    strokeDasharray="8 8"
                    initial={{
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: 1,
                    }}
                    transition={{
                        duration: .5,
                    }}
                />

            ))}

            {horizontal.map(y => (

                <motion.line
                    key={y}
                    x1={40}
                    y1={y}
                    x2={840}
                    y2={y}
                    stroke="#EEF2F7"
                    strokeDasharray="8 8"
                    initial={{
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: 1,
                    }}
                    transition={{
                        duration: .5,
                    }}
                />

            ))}

            <motion.line
                x1={40}
                y1={360}
                x2={860}
                y2={360}
                stroke="#CBD5E1"
                strokeWidth={3}
                initial={{
                    pathLength: 0,
                }}
                animate={{
                    pathLength: 1,
                }}
                transition={{
                    duration: .6,
                }}
            />

            <motion.line
                x1={40}
                y1={360}
                x2={40}
                y2={20}
                stroke="#CBD5E1"
                strokeWidth={3}
                initial={{
                    pathLength: 0,
                }}
                animate={{
                    pathLength: 1,
                }}
                transition={{
                    duration: .6,
                }}
            />

        </g>

    );

}