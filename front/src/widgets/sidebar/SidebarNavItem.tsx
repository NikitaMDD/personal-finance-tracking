import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { cn } from "@/shared/lib/cn";

import type { SidebarItem } from "./sidebar.types";
import { useUIStore } from "@/shared/store/ui.store";

interface Props {
    item: SidebarItem;
}

export function SidebarNavItem({
    item,
}: Props) {
    const Icon = item.icon;

    const sidebarCollapsed = useUIStore(state => state.sidebarCollapsed,);

    return (
        <NavLink
            to={item.href}
            className={({ isActive }) =>
                cn(
                    "group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-colors",
                    isActive
                        ? "bg-[var(--color-primary)] text-white"
                        : "hover:bg-[var(--color-surface-secondary)]",
                )
            }
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <motion.div
                            layoutId="sidebar-item"
                            className="absolute inset-0 rounded-xl bg-[var(--color-primary)]"
                            transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                            }}
                        />
                    )}

                    <Icon
                        size={20}
                        className="relative z-10"
                    />

                    {!sidebarCollapsed && (
                        <span className="relative z-10">
                            {item.title}
                        </span>
                    )}
                </>
            )}
        </NavLink>
    );
}