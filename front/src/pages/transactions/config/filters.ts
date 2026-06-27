import type {
    TransactionFilter,
} from "@/entities/transaction/model";

export const TRANSACTION_FILTERS: {
    value: TransactionFilter;
    label: string;
}[] = [

    {
        value: "all",
        label: "Все",
    },

    {
        value: "income",
        label: "Доходы",
    },

    {
        value: "expense",
        label: "Расходы",
    },

];