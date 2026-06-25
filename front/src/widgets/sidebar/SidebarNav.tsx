import { sidebarBottomItems, sidebarItems } from "./sidebar.data";
import { SidebarNavItem } from "./SidebarNavItem";

export function SidebarNav() {
    return (
        // pr-5 посмотреть с паддингом как получится чуть позже
        <nav className="flex flex-1 flex-col "> 

            <div className="space-y-1">
                {sidebarItems.map((item) => (
                    <SidebarNavItem
                        key={item.href}
                        item={item}
                    />
                ))}
            </div>

            <div className="mt-auto space-y-1">
                {sidebarBottomItems.map((item) => (
                    <SidebarNavItem
                        key={item.href}
                        item={item}
                    />
                ))}
            </div>

        </nav>
    );
}