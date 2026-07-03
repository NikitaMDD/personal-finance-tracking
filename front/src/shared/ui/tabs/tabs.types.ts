import type { ReactNode } from "react";

export interface TabItem {
    value: string;
    label: string;
    icon?: ReactNode;
}

export interface TabsProps {
    value: string;
    items: TabItem[];
    onChange(value: string): void;
}