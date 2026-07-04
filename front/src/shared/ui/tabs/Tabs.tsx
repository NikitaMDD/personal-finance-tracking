import { motion } from "framer-motion";

import { cn } from "@/shared/lib/cn";

import type {
    TabsProps,
} from "./tabs.types";

export function Tabs({
    value,
    items,
    onChange,
}: TabsProps) {

    return (

        <div
            className="
                inline-grid
                auto-cols-fr
                grid-flow-col
                rounded-[var(--radius-md)]
                bg-[var(--color-surface-secondary)]
                p-1
            "
        >

            {items.map(item => {
                const active =
                    item.value === value;

                return (
                    <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                            onChange(item.value)
                        }
                        className="
                            relative
                            px-4
                            py-2
                            text-sm
                            font-medium
                        "
                    >
                        {active && (
                            <motion.div
                                layoutId="tabs-active"
                                className="
                                    absolute
                                    inset-0
                                    rounded-[var(--radius-sm)]
                                    bg-[var(--color-surface)]
                                    shadow-sm
                                "
                                transition={{
                                    layout: {
                                        type: "spring",
                                        stiffness: 420,
                                        damping: 32,
                                    },
                                }}
                            />
                        )}
                        <span
                            className={cn(
                                "relative z-10",
                                active
                                    ? "text-[var(--color-text-primary)]"
                                    : "text-[var(--color-text-secondary)]",
                            )}
                        >
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}