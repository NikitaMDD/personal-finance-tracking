export type ToastVariant =
    | "success"
    | "error"
    | "warning"
    | "info";
    
export interface ToastItem {
    id: string;
    title: string;
    description?: string;
    variant: ToastVariant;
}

export interface ToastContextValue {
    toasts: ToastItem[];
    success(
        title: string,
        description?: string,
    ): void;
    error(
        title: string,
        description?: string,
    ): void;
    warning(
        title: string,
        description?: string,
    ): void;
    info(
        title: string,
        description?: string,
    ): void;
    remove(
        id: string,
    ): void;
}