import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { cn } from "@/shared/lib/cn";

import { useUIStore } from "@/shared/store/ui.store";

import { useImportDialogStore } from "@/shared/store/import-dialog.store";

import type {
    SidebarItem,
} from "./sidebar.types";

interface Props {

    item: SidebarItem;

}

export function SidebarNavItem({

    item,

}: Props) {

    const Icon =
        item.icon;

    const sidebarCollapsed =
        useUIStore(
            state => state.sidebarCollapsed,
        );

    const openImportDialog =
        useImportDialogStore(
            state => state.openDialog,
        );

    if (item.action === "import") {

        return (

            <button

                type="button"

                onClick={openImportDialog}

                className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    overflow-hidden
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    transition-colors
                    hover:bg-[var(--color-surface-secondary)]
                "

            >

                <motion.div

                    className="
                        relative
                        z-10
                        flex
                        shrink-0
                        items-center
                    "

                    animate={{

                        marginRight:
                            sidebarCollapsed
                                ? 0
                                : 12,

                    }}

                    transition={{

                        duration: .3,

                    }}

                >

                    <Icon size={20} />

                </motion.div>

                <div
                    className={cn(

                        `
                        relative
                        z-10
                        grid
                        overflow-hidden
                        transition-[grid-template-columns]
                        duration-300
                        `,

                        sidebarCollapsed
                            ? "grid-cols-[0fr]"
                            : "grid-cols-[1fr]",

                    )}
                >

                    <div
                        className={cn(

                            `
                            flex
                            items-center
                            overflow-hidden
                            whitespace-nowrap
                            transition-opacity
                            duration-300
                            `,

                            sidebarCollapsed
                                ? "opacity-0"
                                : "opacity-100",

                        )}
                    >

                        {item.title}

                    </div>

                </div>

            </button>

        );

    }

    return (

        <NavLink

            to={item.href!}

            className={({ isActive }) =>

                cn(

                    `
                    group
                    relative
                    flex
                    items-center
                    overflow-hidden
                    rounded-xl
                    px-4
                    py-3
                    transition-colors
                    `,

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

                            className="
                                absolute
                                inset-0
                                rounded-xl
                                bg-[var(--color-primary)]
                            "

                            transition={{

                                type: "spring",

                                stiffness: 350,

                                damping: 30,

                            }}

                        />

                    )}

                    <motion.div

                        className="
                            relative
                            z-10
                            flex
                            shrink-0
                            items-center
                        "

                        animate={{

                            marginRight:
                                sidebarCollapsed
                                    ? 0
                                    : 12,

                        }}

                    >

                        <Icon size={20} />

                    </motion.div>

                    <div
                        className={cn(

                            `
                            relative
                            z-10
                            grid
                            overflow-hidden
                            transition-[grid-template-columns]
                            duration-300
                            `,

                            sidebarCollapsed
                                ? "grid-cols-[0fr]"
                                : "grid-cols-[1fr]",

                        )}
                    >

                        <div
                            className={cn(

                                `
                                flex
                                items-center
                                overflow-hidden
                                whitespace-nowrap
                                transition-opacity
                                duration-300
                                `,

                                sidebarCollapsed
                                    ? "opacity-0"
                                    : "opacity-100",

                            )}
                        >

                            {item.title}

                        </div>

                    </div>

                </>

            )}

        </NavLink>

    );

}