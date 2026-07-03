import { ChartCard } from "@/shared/ui/chart-card";
import { Stack } from "@/shared/ui/stack";

import type {
    ExpenseCategory,
} from "@/entities/analytics/model";

import { TopCategoryItem } from "./TopCategoryItem";

interface Props {
    categories: ExpenseCategory[];
    hoveredCategory?: ExpenseCategory;
    onHoverCategory(category?: ExpenseCategory): void;
}

export function TopCategories({
    categories,
    hoveredCategory,
    onHoverCategory,
}: Props) {
    return (
        <ChartCard
            title="Топ категорий"
            subtitle="Наибольшие расходы"
        >
            <Stack gap="xl">
                {categories.map(category => (
                    <TopCategoryItem
                        key={category.categoryId}
                        category={category}
                        active={
                            hoveredCategory?.categoryId ===
                            category.categoryId
                        }
                        onMouseEnter={() =>
                            onHoverCategory(category)
                        }
                        onMouseLeave={() =>
                            onHoverCategory(undefined)
                        }
                    />
                ))}
            </Stack>
        </ChartCard>
    );
}