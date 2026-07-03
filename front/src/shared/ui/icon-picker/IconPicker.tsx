import { CATEGORY_ICONS } from "./icons";
import { cn } from "@/shared/lib/cn";

import { motion } from "framer-motion";

interface Props {
    value?: string;
    onChange(value: string): void;
}

export function IconPicker({
    value,
    onChange,
}: Props) {
    return (
        <div
            className="
                grid
                grid-cols-6
                gap-3
            "
        >
            {CATEGORY_ICONS.map(item => {
                const Icon = item.icon;

                const selected =
                    value === item.id;

                return (
                    <motion.button
                        type="button"
                        whileTap={{
                            scale: .95,
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        animate={{
                            scale: selected ? 1.08 : 1,
                        }}
                        key={item.id}
                        onClick={() =>
                            onChange(item.id)
                        }
                        className={cn(
                            `
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                transition-all
                                duration-200
                            `,
                            selected
                                ? `
                                    border-[var(--color-primary)]
                                    bg-[var(--color-primary)]
                                    text-white
                                    shadow-md
                                    scale-105
                                `
                                : `
                                    border-[var(--color-border)]
                                    bg-white
                                    hover:border-[var(--color-primary)]
                                    hover:bg-[var(--color-surface-secondary)]
                                `,
                        )}
                    >
                        <Icon size={22} />
                    </motion.button>
                );
            })}
        </div>
    );
}