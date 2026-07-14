import type {
    Category,
} from "./category.types";

import type {
    CategoryResponse,
} from "./category-response.types";

export function toCategory(
    category: CategoryResponse,
): Category {
    return {
        id: category.id,
        title: category.name,
        icon: category.icon as Category["icon"],
        color: category.color,
        type:
            category.type === "INCOME"
                ? "income"
                : "expense",
    };
}