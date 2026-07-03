import {
    ShoppingBasket,
    Car,
    House,
    Wallet,
    Plane,
    HeartPulse,
    Gamepad2,
    Gift,
    Shirt,
    GraduationCap,
    CircleDollarSign,
    UtensilsCrossed,
} from "lucide-react";

export const CATEGORY_ICONS = [
    {
        id: "shopping-basket",
        icon: ShoppingBasket,
    },
    {
        id: "car",
        icon: Car,
    },
    {
        id: "house",
        icon: House,
    },
    {
        id: "wallet",
        icon: Wallet,
    },
    {
        id: "plane",
        icon: Plane,
    },
    {
        id: "health",
        icon: HeartPulse,
    },
    {
        id: "gamepad",
        icon: Gamepad2,
    },
    {
        id: "gift",
        icon: Gift,
    },
    {
        id: "shirt",
        icon: Shirt,
    },
    {
        id: "education",
        icon: GraduationCap,
    },
    {
        id: "salary",
        icon: CircleDollarSign,
    },
    {
        id: "restaurant",
        icon: UtensilsCrossed,
    },
];

export const ICON_MAP = Object.fromEntries(
    CATEGORY_ICONS.map(item => [
        item.id,
        item.icon,
    ]),
);