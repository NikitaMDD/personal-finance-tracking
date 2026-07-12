import { useQuery } from "@tanstack/react-query";

import {
    bankConnectionApi,
} from "../api/bankConnection.api";

export function useBankConnections() {

    return useQuery({

        queryKey: [
            "bank-connections",
        ],

        queryFn:
            bankConnectionApi.findAll,

    });

}