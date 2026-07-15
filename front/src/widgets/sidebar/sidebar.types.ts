import type {
    LucideIcon,
} from "lucide-react";

export interface SidebarItem {
    title: string;
    icon: LucideIcon;
    href?: string;
    action?: "import";
}