import type { ReactNode } from "react";

export interface ProgressRingProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    gradient?: [string, string];
    backgroundColor?: string;
    center?: ReactNode;
    className?: string;
}