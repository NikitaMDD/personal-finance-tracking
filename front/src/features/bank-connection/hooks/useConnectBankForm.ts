import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    connectBankSchema,
    type ConnectBankFormData,
} from "../model/connect-bank.schema";

export function useConnectBankForm() {
    return useForm<ConnectBankFormData>({
        resolver:
            zodResolver(connectBankSchema),
        defaultValues: {
            bankId: "",
            externalAccountId: "",
        },
        mode: "onBlur",
    });
}