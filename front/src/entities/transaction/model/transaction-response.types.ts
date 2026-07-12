export interface TransactionResponse {
    id: string;
    bankConnectionId: string | null;
    categoryId: string;
    categoryName: string;
    title: string;
    description: string | null;
    amount: number;
    type: "INCOME" | "EXPENSE";
    transactionDate: string;
}