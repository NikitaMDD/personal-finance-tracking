import { motion } from "framer-motion";

import type {
    LucideIcon,
} from "lucide-react";

import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/cn";

interface Props {
    icon: LucideIcon;
    label: string;
    value: number;
    featured?: boolean;
}

export function ProfileStatCard({
    icon: Icon,
    label,
    value,
    featured,
}: Props) {

    return (

        <motion.div
            whileHover={{
                y: -4,
                scale: 1.02,
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
            }}
        >
            <Card
                className={cn(
                    "rounded-3xl p-6 relative overflow-hidden",
                    featured &&
                        `
                        bg-gradient-to-br
                        from-[var(--color-primary)]
                        to-[var(--color-primary-hover)]
                        text-white
                        `,
                )}
            >
                {featured && (
                    <div
                        className="
                            absolute
                            -right-16
                            -top-16
                            h-52
                            w-52
                            rounded-full
                            bg-white/10
                            blur-3xl
                        "
                    />
                )}
                <div className="relative">
                    <div
                        className={cn(
                            `
                            mb-5
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            `,
                            featured
                                ? "bg-white/20"
                                : "bg-[var(--color-surface-secondary)]",
                        )}
                    >
                        <Icon size={22} />
                    </div>

                    <Typography
                        variant={
                            featured
                                ? "display"
                                : "h2"
                        }
                    >
                        {value}
                    </Typography>

                    <Typography
                        className={cn(
                            "mt-2",
                            featured
                                ? "text-white/80"
                                : "text-[var(--color-text-secondary)]",
                        )}
                    >
                        {label}
                    </Typography>
                </div>
            </Card>
        </motion.div>
    );
}