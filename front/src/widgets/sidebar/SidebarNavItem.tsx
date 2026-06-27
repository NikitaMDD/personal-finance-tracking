import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/cn";
import type { SidebarItem } from "./sidebar.types";
import { useUIStore } from "@/shared/store/ui.store";

interface Props {
    item: SidebarItem;
}

export function SidebarNavItem({ item }: Props) {
    const Icon = item.icon;
    const sidebarCollapsed = useUIStore(state => state.sidebarCollapsed);

    return (
        <NavLink
            to={item.href}
            className={({ isActive }) =>
                cn(
                    "group relative flex items-center rounded-xl px-4 py-3 transition-colors overflow-hidden",
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

                    <motion.div
                        className="relative z-10 shrink-0 flex items-center"
                        animate={{
                            marginRight: sidebarCollapsed ? 0 : 12,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                    >
                        <Icon size={20} />
                    </motion.div>

                    <div 
                        className={cn(
                            "relative z-10 grid overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out",
                            sidebarCollapsed ? "grid-cols-[0fr]" : "grid-cols-[1fr]"
                        )}
                    >
                        <div className={cn(
                            "overflow-hidden whitespace-nowrap flex items-center transition-opacity duration-300 ease-in-out",
                            sidebarCollapsed ? "opacity-0" : "opacity-100"
                        )}>
                            {item.title}
                        </div>
                    </div>
                </>
            )}
        </NavLink>
    );
}