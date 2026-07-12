import type { CategoryIcon } from "./category.types";

export interface CategoryUI {

    icon: CategoryIcon;

    color: string;

}

export const categoryUI: Record<
    string,
    CategoryUI
> = {

    "Продукты": {
        icon: "shopping-basket",
        color: "#22C55E",
    },

    "Транспорт": {
        icon: "car",
        color: "#3B82F6",
    },

    "Дом": {
        icon: "house",
        color: "#8B5CF6",
    },

    "Развлечения": {
        icon: "plane",
        color: "#F97316",
    },

    "Здоровье": {
        icon: "health",
        color: "#EF4444",
    },

    "Прочее": {
        icon: "wallet",
        color: "#64748B",
    },

};