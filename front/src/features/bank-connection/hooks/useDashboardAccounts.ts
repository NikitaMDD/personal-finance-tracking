import { useQuery } from "@tanstack/react-query";

import { bankConnectionApi } from "@/entities/bank-connection/api/bankConnection.api";

export function useDashboardAccounts() {
    return useQuery({
        queryKey: ["dashboard-accounts"],
        queryFn: bankConnectionApi.dashboard,
    });
}