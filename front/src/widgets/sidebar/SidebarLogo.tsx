import { ArrowLeftToLine } from "lucide-react";
import { ArrowRightToLine } from "lucide-react";

import { Typography } from "@/shared/ui/typography";
import { useUIStore } from "@/shared/store/ui.store";
import { cn } from "@/shared/lib/cn";

export function SidebarLogo({...props}) {

    const sidebarCollapsed = useUIStore(state => state.sidebarCollapsed,);

    return (
        <div className="mb-4 flex items-center justify-between">
            {!sidebarCollapsed && 
                (
                    <div>
                        <Typography
                            variant="h3"
                            as="h2"
                        >
                            Personal Finance
                        </Typography>

                        <Typography
                            variant="caption"
                            className="text-[var(--color-text-secondary)]"
                        >
                            Control your money
                        </Typography>
                    </div>
                )
            }

            <div
                className={
                    cn(sidebarCollapsed && 'flex h-11 w-11 items-center justify-center mx-auto my-0')
                }
                {...props}
            >
                { sidebarCollapsed ? <ArrowRightToLine className="cursor-pointer" size={22} /> : <ArrowLeftToLine className="cursor-pointer" size={22} />}
            </div>
        </div>
    );
}