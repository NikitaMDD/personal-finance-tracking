import { motion } from "framer-motion";

import { useId } from "react";

import { progressRingStyles } from "./progress-ring.styles";
import type { ProgressRingProps } from "./progress-ring.types";

export function ProgressRing({
    value,
    size = 180,
    strokeWidth = 12,
    color = "var(--color-primary)",
    backgroundColor = "var(--color-border)",
    center,
    gradient,
    className,
}: ProgressRingProps) {

    const radius =
        (size - strokeWidth) / 2;

    const circumference =
        2 * Math.PI * radius;

    const progress =
        Math.max(
            0,
            Math.min(value, 100),
        );

    const gradientId = useId();

    const offset =
        circumference *
        (1 - progress / 100);

    return (
        <div
            className={progressRingStyles(
                className,
            )}
            style={{
                width: size,
                height: size,
            }}
        >
            <svg
                width={size}
                height={size}
                className="-rotate-90"
            >
                <defs>
                    {gradient && (
                        <linearGradient
                            id={gradientId}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor={gradient[0]}
                            />
                            <stop
                                offset="100%"
                                stopColor={gradient[1]}
                            />
                        </linearGradient>
                    )}
                </defs>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={
                        gradient
                            ? `url(#${gradientId})`
                            : color
                    }
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{
                        strokeDashoffset:
                            circumference,
                    }}
                    animate={{
                        strokeDashoffset:
                            offset,
                    }}
                    transition={{
                        duration: .9,
                        ease: "easeOut",
                    }}
                />
            </svg>
            {center && (
                <div
                    className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                    "
                >
                    {center}
                </div>
            )}
        </div>
    );
}