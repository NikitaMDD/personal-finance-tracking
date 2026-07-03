import type { LucideIcon } from "lucide-react";

export interface Category {
    id: string;
    title: string;
    icon: LucideIcon;
    color: string;
    operationsCount: number;
    totalAmount: number;
    percent: number;
}