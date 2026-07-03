import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import { Plus } from "lucide-react";

interface Props {
    onCreate(): void;
}

export function CategoriesHeader({
    onCreate,
}: Props) {

    return (
        <div
            className="
                flex
                items-center
                justify-between
            "
        >
            <Typography
                variant="h1"
            >
                Категории
            </Typography>
            <Button
                onClick={onCreate}
            >
                <Plus size={18} />
                Добавить
            </Button>
        </div>
    );
}