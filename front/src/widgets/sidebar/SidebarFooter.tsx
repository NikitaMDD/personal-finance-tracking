import { User } from "lucide-react";

import { Typography } from "@/shared/ui/typography";

export function SidebarFooter() {
    return (
        <div className="mt-auto pt-6">
            <div className="flex items-center gap-3">
                <div
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-surface-secondary)]
                    "
                >
                    <User size={20} />
                </div>

                <div>
                    <Typography
                        variant="small"
                    >
                        Никита
                    </Typography>

                    <Typography
                        variant="caption"
                        className="text-[var(--color-text-secondary)]"
                    >
                        nikita@mail.com
                    </Typography>
                </div>
            </div>
        </div>
    );
}