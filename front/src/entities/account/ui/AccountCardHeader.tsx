import type { AccountMeta } from "../model";
import { ACCOUNT_CARD_SIZES } from "./account-card.config";
import { cn } from "@/shared/lib/cn";

interface AccountCardHeaderProps {
    meta: AccountMeta;
    size: "sm" | "md" | "lg";
}

export function AccountCardHeader({
    meta,
    size,
}: AccountCardHeaderProps) {

    const currentSize = ACCOUNT_CARD_SIZES[size];

    return (
        <div className="flex items-center justify-between">

            <div
                className={cn(
                    "flex items-center justify-start",
                    currentSize.logoContainer,
                )}
            >
                {meta.media.type === "image" ? (
                    <img
                        src={meta.media.value}
                        alt={meta.title}
                        className="
                            max-h-full
                            max-w-full
                            object-contain
                        "
                    />
                ) : (
                    (() => {
                        const Icon = meta.media.value;

                        return (
                            <Icon
                                size={currentSize.iconSize}
                                strokeWidth={2}
                            />
                        );
                    })()
                )}
            </div>

            <span>{meta.title}</span>

        </div>
    );
}