import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/shared/ui/button";

import type {
    AccountSliderController,
} from "./hooks/useAccountSlider";

interface Props {
    slider: AccountSliderController;
}

export function AccountSliderControls({
    slider,
}: Props) {

    return (

        <div
            className="
                flex
                gap-3
            "
        >
            <Button
                variant="ghost"
                className="
                    h-10
                    w-10
                    rounded-full
                    p-0
                "
                onClick={slider.prev}
                disabled={
                   slider.activeIndex === 0
                }
            >
                <ChevronLeft
                    size={18}
                />
            </Button>
            <Button
                variant="ghost"
                className="
                    h-10
                    w-10
                    rounded-full
                    p-0
                "
                onClick={slider.next}
                disabled={
                    slider.activeIndex === slider.cardsCount - 1
                }
            >
                <ChevronRight
                    size={18}
                />
            </Button>
        </div>

    );
}