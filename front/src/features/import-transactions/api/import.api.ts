import { api } from "@/shared/api/client/http";

import type {
    ImportRequest,
} from "../model/import-request.types";

import type {
    ImportResponse,
} from "../model/import-response.types";

export const importApi = {

    importStatement(
        data: ImportRequest,
    ) {

        const formData =
            new FormData();

        formData.append(
            "file",
            data.file,
        );

        return api<ImportResponse>(
            `/import/${data.bankConnectionId}`,
            {
                method: "POST",
                body: formData,
            },
        );

    },

};