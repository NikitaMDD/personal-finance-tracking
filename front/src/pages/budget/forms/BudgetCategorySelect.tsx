import {
    useMemo,
} from "react";

import {
    ICON_MAP,
} from "@/shared/ui/icon-picker/icons";

import {
    Select,
    type SelectOption,
} from "@/shared/ui/select";

import {
    useCategories,
} from "@/entities/category/hooks/useCategories";

interface Props {

    value?: string;

    label?: string;

    error?: string;

    onChange(
        value: string,
    ): void;

}

export function BudgetCategorySelect({

    value,

    label = "Категория",

    onChange,

}: Props) {

    const {
        data: categories = [],
        isLoading,
    } = useCategories();

    const options =
        useMemo<SelectOption[]>(
            () =>
                categories.map(category => ({

                    value: category.id,

                    label: category.title,

                    color: category.color,

                    icon: category.icon,

                })),
            [categories],
        );

    return (

        <Select

            label={label}

            value={value}

            placeholder="Выберите категорию"

            options={options}

            disabled={isLoading}

            onValueChange={onChange}

            renderOption={(option) => {

                const Icon =
                    ICON_MAP[
                        option.icon!
                    ];

                return (

                    <>
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                            "
                            style={{
                                background:
                                    `${option.color}15`,
                            }}
                        >

                            <Icon
                                size={18}
                                color={option.color}
                            />

                        </div>

                        <span>
                            {option.label}
                        </span>

                    </>

                );

            }}

            renderValue={(option) => {

                const Icon =
                    ICON_MAP[
                        option.icon!
                    ];

                return (

                    <>
                        <div
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-lg
                            "
                            style={{
                                background:
                                    `${option.color}15`,
                            }}
                        >

                            <Icon
                                size={16}
                                color={option.color}
                            />

                        </div>

                        <span>
                            {option.label}
                        </span>

                    </>

                );

            }}

        />

    );

}