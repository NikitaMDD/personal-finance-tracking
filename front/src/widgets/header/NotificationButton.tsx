import { Bell } from "lucide-react";

export function NotificationButton() {
    return (
        <button
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--color-border)]
                transition
                hover:bg-[var(--color-surface-secondary)]
                cursor-pointer
            "
        >
            <Bell size={20} />
        </button>
    );
}