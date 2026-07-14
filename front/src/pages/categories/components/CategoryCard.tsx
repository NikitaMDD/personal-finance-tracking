import { Card } from "@/shared/ui/card";
import { Divider } from "@/shared/ui/divider";
import { Progress } from "@/shared/ui/progress";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    Category,
} from "@/entities/category/model";

import { CategoryActions } from "./CategoryActions";

import { ICON_MAP } from "@/shared/ui/icon-picker/icons";
import { motion } from "framer-motion";

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

    const Icon =
        ICON_MAP[category.icon];

    return (
        <motion.div
            whileHover={{
                y: -4,
                scale: 1.015,
            }}
        >
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

                </Stack>

                <Divider className="my-6"/>

                <Typography
                    variant="body"
                    className="
                        mt-4
                        text-[var(--color-text-secondary)]
                    "
                >
                    {
                        category.type === "income"
                            ? "Доход"
                            : "Расход"
                    }
                </Typography>

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
        </motion.div>
    );
}