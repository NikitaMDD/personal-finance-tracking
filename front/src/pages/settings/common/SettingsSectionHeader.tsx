import type {
    LucideIcon,
} from "lucide-react";

import { Typography } from "@/shared/ui/typography";

interface Props {

    icon: LucideIcon;

    title: string;

    description: string;

}

export function SettingsSectionHeader({

    icon: Icon,

    title,

    description,

}: Props) {

    return (

        <div>

            <div
                className="
                    flex
                    items-center
                    gap-3
                "
            >

                <div
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[var(--color-surface-secondary)]
                    "
                >
                    <Icon
                        size={20}
                    />
                </div>

                <Typography
                    variant="h2"
                >
                    {title}
                </Typography>

            </div>

            <Typography
                className="
                    mt-3
                    text-[var(--color-text-secondary)]
                "
            >
                {description}
            </Typography>

        </div>

    );

}