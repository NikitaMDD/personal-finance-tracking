export type CategoryIcon =
    | "shopping-basket"
    | "car"
    | "house"
    | "wallet"
    | "plane"
    | "health"
    | "gamepad"
    | "gift"
    | "shirt"
    | "education"
    | "salary"
    | "restaurant";

export interface Category {
    id: string;
    title: string;
    icon: CategoryIcon;
    color: string;
    type: "income" | "expense";
    operationsCount: number;
    totalAmount: number;
    percent: number;
}