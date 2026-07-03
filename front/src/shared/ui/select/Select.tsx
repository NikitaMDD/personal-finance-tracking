import * as SelectPrimitive from "@radix-ui/react-select";

import {
    Check,
    ChevronDown,
} from "lucide-react";

import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/cn";

import {
    selectVariants,
} from "./select.styles";

import type {
    SelectProps,
} from "./select.types";

export function Select({
    value,
    options,
    label,
    placeholder,
    disabled,
    onValueChange,
    renderValue,
    renderOption,
}: SelectProps) {

    const selectedOption =
        options.find(
            option =>
                option.value === value,
        );

    return (
        <div className="space-y-2">
            {label && (
                <Typography>
                    {label}
                </Typography>
            )}
            <SelectPrimitive.Root
                value={value}
                disabled={disabled}
                onValueChange={onValueChange}
            >
                <SelectPrimitive.Trigger
                    className={cn(
                        selectVariants(),
                    )}
                >
                    <SelectPrimitive.Value asChild>

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            {selectedOption
                                ? (
                                    renderValue
                                        ? renderValue(
                                            selectedOption,
                                        )
                                        : selectedOption.label
                                )
                                : (
                                    <span
                                        className="
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        {placeholder}
                                    </span>
                                )}
                        </div>

                    </SelectPrimitive.Value>
                    <SelectPrimitive.Icon>
                        <ChevronDown
                            size={18}
                        />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content
                        position="popper"
                        sideOffset={8}
                        className="
                            z-50
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-white
                            shadow-xl
                        "
                    >
                        <SelectPrimitive.Viewport
                            className="p-2"
                        >
                            {options.map(option => (
                                <SelectPrimitive.Item
                                    key={option.value}
                                    value={option.value}
                                    className="
                                        flex
                                        cursor-pointer
                                        items-center
                                        justify-between
                                        rounded-xl
                                        px-3
                                        py-2
                                        outline-none
                                        transition-colors
                                        data-[highlighted]:bg-[var(--color-surface-secondary)]
                                    "
                                >
                                    <SelectPrimitive.ItemText asChild>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            {renderOption
                                                ? renderOption(option)
                                                : option.label}

                                        </div>

                                    </SelectPrimitive.ItemText>
                                    <SelectPrimitive.ItemIndicator>
                                        <Check
                                            size={16}
                                        />
                                    </SelectPrimitive.ItemIndicator>
                                </SelectPrimitive.Item>
                            ))}
                        </SelectPrimitive.Viewport>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
            </SelectPrimitive.Root>
        </div>
    );
}