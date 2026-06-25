import type { InputHTMLAttributes } from "react";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: string;
    fullWidth?: boolean;
}