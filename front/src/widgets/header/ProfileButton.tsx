import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { Avatar } from "@/shared/ui/avatar";

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
                <Avatar
                    name="Никита Марчук"
                    size="md"
                />
            </div>

            <Typography
                variant="small"
            >
                Никита Марчук
            </Typography>
        </button>
    );
}