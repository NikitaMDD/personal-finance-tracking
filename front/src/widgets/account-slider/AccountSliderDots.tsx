import { cn } from "@/shared/lib/cn";
import type { AccountSliderController } from "./hooks/useAccountSlider";

interface Props {
    slider: AccountSliderController;
    count: number;
}

export function AccountSliderDots({
    slider,
    count,
}: Props) {
    return (
        <div className="flex justify-center gap-2">
            {Array.from({
                length: count,
            }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => slider.scrollTo(index)}
                    className={cn(
                        "h-2 rounded-full transition-all",
                        slider.activeIndex === index
                            ? "w-8 bg-[var(--color-primary)]"
                            : "w-2 bg-[var(--color-border)]"
                    )}
                />
            ))}
        </div>
    );
}