import {
    MoreHorizontal,
    Pencil,
    Trash2,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import {
    Popover,
} from "@/shared/ui/popover";

interface Props {
    onEdit?(): void;
    onDelete?(): void;
}

export function BudgetActions({
    onEdit,
    onDelete,
}: Props) {

    return (

        <Popover
            trigger={
                <Button
                    variant="ghost"
                    size="sm"
                >
                    <MoreHorizontal size={18}/>
                </Button>

            }
        >
            <div className="w-48">
                <button
                    type="button"
                    onClick={onEdit}
                    className="
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-xl
                        px-3
                        py-2
                        transition-colors
                        hover:bg-[var(--color-surface-secondary)]
                    "
                >
                    <Pencil size={16}/>
                    Редактировать
                </button>

                <button
                    type="button"
                    onClick={onDelete}
                    className="
                        mt-1
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-xl
                        px-3
                        py-2
                        text-red-500
                        transition-colors
                        hover:bg-red-50
                    "
                >
                    <Trash2 size={16}/>
                    Удалить
                </button>
            </div>
        </Popover>
    );
}