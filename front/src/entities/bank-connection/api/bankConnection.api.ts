import { api } from "@/shared/api/client/http";

import type {
    DashboardAccountResponse,
} from "../model/dashboard-account.types";

import type {
    ConnectBankRequest,
} from "@/features/bank-connection/model/connect-bank.types";

export const bankConnectionApi = {
    dashboard() {
        return api<DashboardAccountResponse[]>(
            "/bank-connections/dashboard",
        );
    },
    connect(
        data: ConnectBankRequest,
    ) {

        return api<void>(
            "/bank-connections",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );

    },
};