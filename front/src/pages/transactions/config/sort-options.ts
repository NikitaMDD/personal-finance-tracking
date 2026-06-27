import type {
    TransactionSort,
} from "@/entities/transaction/model";

export const TRANSACTION_SORT_OPTIONS: {
    value: TransactionSort;
    label: string;
}[] = [

    {
        value: "newest",
        label: "Сначала новые",
    },

    {
        value: "oldest",
        label: "Сначала старые",
    },

    {
        value: "amount-desc",
        label: "По сумме ↓",
    },

    {
        value: "amount-asc",
        label: "По сумме ↑",
    },

];