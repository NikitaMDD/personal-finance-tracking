import { api } from "@/shared/api/client/http";
import type { Bank } from "../model/bank.types";

export const bankApi = {
    findAll() {
        return api<Bank[]>(
            "/banks",
        );
    },
};