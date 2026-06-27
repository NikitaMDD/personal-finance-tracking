import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Typography } from "@/shared/ui/typography";
import { useUIStore } from "@/shared/store/ui.store";
import { cn } from "@/shared/lib/cn";

export function SidebarLogo({...props}) {
    const sidebarCollapsed = useUIStore(state => state.sidebarCollapsed);

    return (
        <div className="mb-4 flex items-center justify-between">
            {/* Обертка для плавной анимации ширины через CSS Grid */}
            <div 
                className={cn(
                    "grid overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out",
                    sidebarCollapsed ? "grid-cols-[0fr]" : "grid-cols-[1fr]"
                )}
            >
                <div className={cn(
                    "overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out",
                    sidebarCollapsed ? "opacity-0" : "opacity-100"
                )}>
                    <Typography variant="h3" as="h2">
                        Personal Finance
                    </Typography>
                    <Typography
                        variant="caption"
                        className="text-[var(--color-text-secondary)]"
                    >
                        Control your money
                    </Typography>
                </div>
            </div>

            <div
                className={cn(
                    "shrink-0",
                    sidebarCollapsed && 'flex h-11 w-11 items-center justify-center mx-auto my-0'
                )}
                {...props}
            >
                {sidebarCollapsed ? (
                    <ArrowRightToLine className="cursor-pointer" size={22} />
                ) : (
                    <ArrowLeftToLine className="cursor-pointer" size={22} />
                )}
            </div>
        </div>
    );
}