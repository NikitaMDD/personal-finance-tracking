import type {
    Category,
} from "@/entities/category/model";

import { CategoryCard } from "./CategoryCard";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

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
                            scale: .95,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: .95,
                        }}
                        transition={{
                            duration: .25,
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