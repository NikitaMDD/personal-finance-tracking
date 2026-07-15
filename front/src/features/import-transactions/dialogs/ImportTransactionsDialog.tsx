import { useEffect, useMemo, useState } from "react";

import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { useToast } from "@/shared/ui/toast";

import {
    ConnectedBankSelect,
} from "../components/ConnectedBankSelect";

import {
    FileDropzone,
} from "../components/FileDropzone";

import {
    ImportFileInfo,
} from "../components/ImportFileInfo";

import {
    useImportTransactionsMutation,
} from "../hooks/useImportTransactionsMutation";

import {
    IMPORT_BANK_CONFIG,
} from "../model/import-bank-config";

import {
    useBankConnections,
} from "@/entities/bank-connection/hooks/useBankConnections";

interface Props {

    open: boolean;

    onOpenChange(
        open: boolean,
    ): void;

}

export function ImportTransactionsDialog({

    open,

    onOpenChange,

}: Props) {

    const mutation =
        useImportTransactionsMutation();

    const banksQuery =
        useBankConnections();

    const toast =
        useToast();

    const [

        bankConnectionId,

        setBankConnectionId,

    ] = useState("");

    const [

        file,

        setFile,

    ] = useState<File>();

    const selectedBank =
        useMemo(
            () =>
                banksQuery.data?.find(
                    bank =>
                        bank.id ===
                        bankConnectionId,
                ),
            [
                banksQuery.data,
                bankConnectionId,
            ],
        );

    const config =
        selectedBank
            ? IMPORT_BANK_CONFIG[
                selectedBank.bankCode
            ]
            : {
                accept:
                    ".csv,.xlsx",

                extensions:
                    "CSV, XLSX",
            };

    useEffect(() => {

        if (!open) {

            setBankConnectionId("");

            setFile(undefined);

        }

    }, [open]);

    function handleBankChange(
        value: string,
    ) {

        setBankConnectionId(
            value,
        );

        setFile(
            undefined,
        );

    }

    async function handleImport() {

        if (
            !bankConnectionId ||
            !file
        ) {
            return;
        }

        const result =
            await mutation.mutateAsync({

                bankConnectionId,

                file,

            });

        toast.success(
            `Импортировано ${result.importedRows} операций`,
        );

        setFile(
            undefined,
        );

        setBankConnectionId(
            "",
        );

        onOpenChange(
            false,
        );

    }

    return (

        <Dialog

            open={open}

            onOpenChange={onOpenChange}

            title="Импорт банковской выписки"

            description="
                Выберите подключенный банковский счет
                и загрузите выписку.
            "

        >

            <div
                className="
                    space-y-6
                "
            >

                <ConnectedBankSelect

                    value={
                        bankConnectionId
                    }

                    onChange={
                        handleBankChange
                    }

                />

                <FileDropzone

                    file={file}

                    accept={
                        config.accept
                    }

                    extensions={
                        config.extensions
                    }

                    onChange={
                        setFile
                    }

                />

                {file && (

                    <ImportFileInfo
                        file={file}
                    />

                )}

                <Stack
                    direction="row"
                    justify="end"
                    gap="md"
                >

                    <Button

                        variant="secondary"

                        onClick={() =>
                            onOpenChange(
                                false,
                            )
                        }

                    >

                        Отмена

                    </Button>

                    <Button

                        loading={
                            mutation.isPending
                        }

                        disabled={
                            !bankConnectionId ||
                            !file
                        }

                        onClick={
                            handleImport
                        }

                    >

                        Импортировать

                    </Button>

                </Stack>

            </div>

        </Dialog>

    );

}