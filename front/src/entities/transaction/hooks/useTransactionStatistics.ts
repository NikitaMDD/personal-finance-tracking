import { useQuery } from "@tanstack/react-query";

import { transactionApi } from "../api/transaction.api";

export function useTransactionStatistics() {

    return useQuery({

        queryKey: [
            "transaction-statistics",
        ],

        queryFn:
            transactionApi.statistics,

    });

}