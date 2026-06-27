import type { LucideIcon } from "lucide-react";

import {
    ShoppingBasket,
    Car,
    Coffee,
    Wallet,
    Plane,
    GraduationCap,
    CircleDollarSign,
    HelpCircle,
} from "lucide-react";

export const TRANSACTION_ICONS: Record<
    string,
    LucideIcon
> = {
    food: ShoppingBasket,
    transport: Car,
    coffee: Coffee,
    shopping: ShoppingBasket,
    salary: CircleDollarSign,
    education: GraduationCap,
    travel: Plane,
    other: HelpCircle,
};