import { User } from "lucide-react";

import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";

export function ProfileButton() {
    return (
        <button
            className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[var(--color-border)]
                px-4
                py-2
                transition
                hover:bg-[var(--color-surface-secondary)]
                cursor-pointer
            "
        >
            <div
                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-primary)]
                    text-white
                "
            >
                <User size={18} />
            </div>

            <Typography
                variant="small"
            >
                Никита
            </Typography>
        </button>
    );
}