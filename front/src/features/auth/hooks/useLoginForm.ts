import { zodResolver } from "@hookform/resolvers/zod";
import {
    useForm,
    type DefaultValues,
} from "react-hook-form";

import {
    loginSchema,
    type LoginFormData,
} from "../model/login.schema";

export function useLoginForm(
    defaultValues?: DefaultValues<LoginFormData>,
) {

    return useForm<LoginFormData>({

        resolver: zodResolver(
            loginSchema,
        ),

        defaultValues: defaultValues ?? {
            email: "",
            password: "",
        },

        mode: "onBlur",

    });

}