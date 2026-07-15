export interface ImportBankConfig {

    accept: string;

    extensions: string;

}

export const IMPORT_BANK_CONFIG: Record<
    string,
    ImportBankConfig
> = {

    ALFA: {

        accept: ".xlsx",

        extensions: "XLSX",

    },

    RAIFFEISEN: {

        accept: ".csv",

        extensions: "CSV",

    },

    SBER: {

        accept: ".csv,.xlsx",

        extensions: "CSV, XLSX",

    },

    TBANK: {

        accept: ".csv,.xlsx",

        extensions: "CSV, XLSX",

    },

    VTB: {

        accept: ".csv,.xlsx",

        extensions: "CSV, XLSX",

    },

};