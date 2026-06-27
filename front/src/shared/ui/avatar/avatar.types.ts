import type { ImgHTMLAttributes } from "react";

import type {
    VariantProps,
} from "class-variance-authority";

import {
    avatarVariants,
} from "./avatar.styles";

export interface AvatarProps
    extends Omit<
        ImgHTMLAttributes<HTMLImageElement>,
        "size"
    >,
    VariantProps<typeof avatarVariants> {

        name?: string;

    }