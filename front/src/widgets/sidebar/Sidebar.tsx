import { SidebarLogo } from "./SidebarLogo";
import { SidebarNav } from "./SidebarNav";
import { Divider } from "@/shared/ui/divider";
import { cn } from "@/shared/lib/cn";
import { useUIStore } from "@/shared/store/ui.store";
import { motion } from 'framer-motion';

export function Sidebar() {

    const {
        sidebarCollapsed: collapsed,
        toggleSidebar,
    } = useUIStore();

    return (
        <motion.aside
            className={
                cn(                
                    'flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-surface)] py-6 ml-[12px] mr-[6px] rounded-3xl',
                    collapsed ? 'w-20 px-3' : 'w-72 px-6'
                )
            }
            animate={{
                width: collapsed ? 80 : 288,
                paddingLeft: collapsed ? 12 : 24,
                paddingRight: collapsed ? 12 : 24,
            }}
            // layout попробовать добиться анимации с layout
            transition={{ type: 'spring', stiffness: 300, damping: 23 }}
        >
            <SidebarLogo onClick={toggleSidebar} />

            <Divider />
            
            <SidebarNav/>
                        
        </motion.aside>
    );
}