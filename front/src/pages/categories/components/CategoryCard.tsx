import { Card } from "@/shared/ui/card";
import { Divider } from "@/shared/ui/divider";
import { Progress } from "@/shared/ui/progress";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    Category,
} from "@/entities/category/model";

import { CategoryActions } from "./CategoryActions";

interface Props {
    category: Category;
    onEdit(
        category: Category,
    ): void;
    onDelete(
        category: Category,
    ): void;
}

export function CategoryCard({
    category,
    onEdit,
    onDelete,
}: Props) {

    const Icon = category.icon;

    return (
        <Card
            className="
                relative
                overflow-hidden
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <Stack
                direction="row"
                justify="between"
                align="center"
            >
                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                    "
                    style={{
                        backgroundColor:
                            `${category.color}15`,
                    }}
                >
                    <Icon
                        size={28}
                        color={category.color}
                    />
                </div>

                <CategoryActions
                    category={category}
                    onEdit={() =>
                        onEdit(category)
                    }

                    onDelete={() =>
                        onDelete(category)
                    }
                />
            </Stack>

            <Stack
                gap="xs"
                className="mt-6"
            >
                <Typography variant="h3">
                    {category.title}
                </Typography>

                <Typography
                    variant="caption"
                    className="
                        text-[var(--color-text-secondary)]
                    "
                >
                    {category.operationsCount} операций
                </Typography>
            </Stack>

            <Divider className="my-6"/>

            <Typography
                variant="display"
            >
                {category.totalAmount.toLocaleString("ru-RU")} ₽
            </Typography>

            <div className="mt-6">

                <div
                    className="
                        mb-2
                        flex
                        justify-between
                    "
                >
                    <Typography variant="caption">
                        Доля расходов
                    </Typography>

                    <Typography variant="caption">
                        {category.percent}%
                    </Typography>
                </div>
                <Progress
                    value={category.percent}
                    color={category.color}
                />
            </div>

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                "
                style={{
                    backgroundColor:
                        category.color,
                    }}
            />
        </Card>
    );
}