import { useState } from "react";

import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function DialogSection() {

    const [open, setOpen] = useState(false);

    return (
        <GuidelineSection title="Dialog">
            <Button
                onClick={() => setOpen(true)}
            >
                Открыть Dialog
            </Button>
            <Dialog
                open={open}
                onOpenChange={setOpen}
                title="Пример Dialog"
                description="Так будут выглядеть все модальные окна приложения."
            >
                <Typography>
                    Здесь может находиться абсолютно любой контент.
                </Typography>
            </Dialog>
        </GuidelineSection>
    );
}