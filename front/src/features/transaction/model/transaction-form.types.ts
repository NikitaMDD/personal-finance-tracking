export interface TransactionForm {
    bankConnectionId: string;
    categoryId: string;
    title: string;
    description: string;
    amount: number;
    type: "INCOME" | "EXPENSE";
    transactionDate: string;
}