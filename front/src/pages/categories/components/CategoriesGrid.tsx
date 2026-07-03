import type {
    Category,
} from "@/entities/category/model";

import { CategoryCard } from "./CategoryCard";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import { Empty } from "@/shared/ui/empty";
import { Button } from "@/shared/ui/button";

interface Props {
    categories: Category[];
    onEdit(
        category: Category,
    ): void;
    onDelete(
        category: Category,
    ): void;
}

export function CategoriesGrid({
    categories,
    onEdit,
    onDelete,
}: Props) {

    if (!categories.length) {
        return (
            <Empty
                title="Категории не найдены"
                description="Попробуйте изменить поисковый запрос."
                action={
                    <Button>
                        Создать категорию
                    </Button>
                }
            />
        );
    }

    return (
        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            <AnimatePresence>
                {categories.map(category => (
                    <motion.div
                        key={category.id}
                        layout
                        initial={{
                            opacity: 0,
                            scale: .96,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: .96,
                            y: 20,
                        }}
                        transition={{
                            duration: .22,
                        }}
                    >
                        <CategoryCard
                            category={category}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}