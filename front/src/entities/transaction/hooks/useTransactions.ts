import { useQuery } from "@tanstack/react-query";

import { transactionApi } from "../api/transaction.api";

import {
    toTransaction,
} from "../model/transaction.mapper";

export function useTransactions() {
    return useQuery({

        queryKey: [
            "transactions",
        ],

        queryFn: async () => {
            const data =
                await transactionApi.findAll();

            return data.map(
                toTransaction,
            );
        },
    });
}