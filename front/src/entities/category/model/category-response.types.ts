export interface CategoryResponse {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: "INCOME" | "EXPENSE";
}