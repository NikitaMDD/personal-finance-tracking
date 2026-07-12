import { Inbox } from "lucide-react";

import { Typography } from "@/shared/ui/typography";

import { cn } from "@/shared/lib/cn";

import { emptyVariants } from "./empty.styles";
import type { EmptyProps } from "./empty.types";
import { Button } from "@/shared/ui/button";

export function Empty({
    icon,
    title,
    description,
    action,
    onAction,
    className,
    ...props
}: EmptyProps) {
    return (
        <div
            className={cn(
                emptyVariants(),
                className,
            )}
            {...props}
        >

            <div
                className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-surface-secondary)]
                "
            >
                {icon ?? (
                    <Inbox
                        size={30}
                    />
                )}
            </div>
            <Typography
                variant="h3"
            >
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="body"
                    className="
                        mt-2
                        max-w-md
                        text-[var(--color-text-secondary)]
                    "
                >
                    {description}
                </Typography>
            )}
            {action && onAction && (
                <Button
                    className="mt-8"
                    onClick={onAction}
                >
                    {action}
                </Button>
            )}
        </div>
    );
}