export type TransactionType =
    | "income"
    | "expense";

export type Currency =
    | "RUB"
    | "USD"
    | "EUR";

export interface Transaction {
    id: string;
    accountId: string;
    categoryId: string;
    title: string;
    description?: string;
    amount: number;
    currency: Currency;
    categoryName: string;
    type: TransactionType;
    date: string;
    merchant?: string;
}