import {
    UserPen,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

interface Props {

    onEdit(): void;

}

export function ProfileHeader({
    onEdit,
}: Props) {

    return (

        <div
            className="
                mb-10
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-end
                lg:justify-between
            "
        >

            <div>

                <Typography
                    variant="display"
                >
                    Профиль
                </Typography>

                <Typography
                    className="
                        mt-3
                        max-w-2xl
                        text-[var(--color-text-secondary)]
                    "
                >
                    Управляйте личной информацией,
                    подключенными банками и
                    параметрами аккаунта.
                </Typography>

            </div>

            <Button
                startContent={
                    <UserPen
                        size={18}
                    />
                }
                onClick={onEdit}
            >
                Редактировать
            </Button>

        </div>

    );

}