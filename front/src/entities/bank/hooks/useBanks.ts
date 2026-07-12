import { useQuery } from "@tanstack/react-query";
import { bankApi } from "../api/bank.api";

export function useBanks() {
    return useQuery({
        queryKey: ["banks"],
        queryFn: bankApi.findAll,
    });
}