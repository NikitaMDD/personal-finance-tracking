import { useMemo, useState } from "react";

import { User } from "lucide-react";
import { cn } from "@/shared/lib/cn";

import { avatarVariants } from "./avatar.styles";
import type { AvatarProps } from "./avatar.types";

function getInitials(name?: string) {

    if (!name) {
        return null;
    }

    return name
        .trim()
        .split(" ")
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();

}

export function Avatar({
    src,
    alt,
    name,
    size,
    className,
    ...props
}: AvatarProps) {

    const [imageError, setImageError] =
        useState(false);

    const initials = useMemo(
        () => getInitials(name),
        [name],
    );

    return (
        <div
            className={cn(
                avatarVariants({
                    size,
                }),
                className,
            )}
        >
            {src && !imageError ? (
                <img
                    src={src}
                    alt={alt}
                    onError={() =>
                        setImageError(true)
                    }
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                    {...props}
                />
            ) : initials ? (
                initials
            ) : (
                <User
                    size={20}
                />
            )}
        </div>
    );
}