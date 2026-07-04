import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { ROUTES } from "@/shared/constants/routes";

export function NotFoundActions() {

    const navigate =
        useNavigate();

    return (

        <div
            className="
                mt-12
                flex
                justify-center
            "
        >
            <Button
                size="lg"
                // leftIcon={
                //     <ArrowLeft
                //         size={18}
                //     />
                // }
                onClick={() =>
                    navigate(ROUTES.DASHBOARD)
                }
            >
                Восстановить баланс
            </Button>
        </div>

    );

}