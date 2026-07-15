import { Select } from "@/shared/ui/select";

import {
    useBankConnections,
} from "@/entities/bank-connection/hooks/useBankConnections";

interface Props {

    value?: string;

    onChange(
        value: string,
    ): void;

}

export function ConnectedBankSelect({

    value,

    onChange,

}: Props) {

    const banks =
        useBankConnections();

    return (

        <Select

            label="Банк"

            placeholder="Выберите подключенный банк"

            value={value}

            options={
                banks.data?.map(bank => ({

                    value: bank.id,

                    label: bank.bankName,

                    icon: bank.logo,

                    color: bank.color,

                    bankCode: bank.bankCode,

                })) ?? []
            }

            onValueChange={onChange}

            renderOption={option => (

                <>

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            border
                        "
                    >

                        <img
                            src={option.icon}
                            alt={option.label}
                            className="
                                h-7
                                w-7
                                object-contain
                            "
                        />

                    </div>

                    <span>

                        {option.label}

                    </span>

                </>

            )}

            renderValue={option => (

                <>

                    <div
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                        "
                    >

                        <img
                            src={option.icon}
                            alt={option.label}
                            className="
                                h-6
                                w-6
                                object-contain
                            "
                        />

                    </div>

                    <span>

                        {option.label}

                    </span>

                </>

            )}

        />

    );

}