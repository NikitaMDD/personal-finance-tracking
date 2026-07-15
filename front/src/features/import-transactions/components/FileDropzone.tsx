import { Upload } from "lucide-react";

import { Button } from "@/shared/ui/button";

import { Typography } from "@/shared/ui/typography";

interface Props {

    file?: File;

    accept: string;

    extensions: string;

    onChange(
        file: File,
    ): void;

}

export function FileDropzone({

    file,

    onChange,
    accept,
    extensions,

}: Props) {

    return (

        <div
            className="
                rounded-3xl
                border-2
                border-dashed
                border-[var(--color-border)]
                p-10
                text-center
            "
        >

            <Upload
                size={42}
                className="mx-auto"
            />

            <Typography
                className="mt-4"
            >

                Выберите банковскую выписку

            </Typography>

            <Typography
                className="
                    mt-2
                    text-[var(--color-text-secondary)]
                "
            >

                Поддерживаются {extensions}

            </Typography>

            <Button
                className="mt-6"
            >

                <label>

                    Выбрать файл

                    <input

                        hidden

                        type="file"

                        accept={accept}

                        onChange={event => {

                            const selected =
                                event.target.files?.[0];

                            if (selected) {

                                onChange(
                                    selected,
                                );

                            }

                        }}

                    />

                </label>

            </Button>

            {file && (

                <Typography
                    className="
                        mt-5
                        text-sm
                        text-[var(--color-success)]
                    "
                >

                    ✓ {file.name}

                </Typography>

            )}

        </div>

    );

}