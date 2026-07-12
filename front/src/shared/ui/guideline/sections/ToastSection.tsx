import { useState } from "react";

import { Button } from "@/shared/ui/button";
import { useToast } from "@/shared/ui/toast";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function ToastSection() {

    const toast = useToast();

    return (
        <GuidelineSection title="Tabs">
            <div className="flex flex-wrap gap-6">
                <GuidelineBlock title="Toast">
                    <div className="flex flex-wrap gap-4">

                        <Button
                            variant="secondary"
                            onClick={() =>
                                toast.success(
                                    "Успешно",
                                    "Операция выполнена успешно.",
                                )
                            }
                        >
                            Успешно
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() =>
                                toast.error(
                                    "Ошибка",
                                    "Что-то пошло не так.",
                                )
                            }
                        >
                            Ошибка
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() =>
                                toast.warning(
                                    "Предупреждение",
                                    "Будьте внимательны.",
                                )
                            }
                        >
                            Предупреждение
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() =>
                                toast.info(
                                    "Информация",
                                    "Импорт завершён.",
                                )
                            }
                        >
                            Информация
                        </Button>

                    </div>
                </GuidelineBlock>
            </div>
        </GuidelineSection>
    );
}