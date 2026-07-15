import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { importApi } from "../api/import.api";

export function useImportTransactionsMutation() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn:
            importApi.importStatement,

        onSuccess() {

            queryClient.invalidateQueries({
                queryKey: ["transactions"],
            });

            queryClient.invalidateQueries({
                queryKey: ["dashboard"],
            });

            queryClient.invalidateQueries({
                queryKey: ["analytics"],
            });

            queryClient.invalidateQueries({
                queryKey: ["budgets"],
            });

            queryClient.invalidateQueries({
                queryKey: ["profile-statistics"],
            });

        },

    });

}