import { Input } from "@/shared/ui/input";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineGrid } from "../components/GuidelineGrid";
import { GuidelineSection } from "../components/GuidelineSection";

export function InputsSection() {
    return (
        <GuidelineSection title="Inputs">
            <GuidelineGrid>

                <GuidelineBlock title="Default">
                    <Input
                        placeholder="Введите текст"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="With Label">
                    <Input
                        label="Email"
                        placeholder="Введите email"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Required">
                    <Input
                        label="Пароль*"
                        placeholder="Введите пароль"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Disabled">
                    <Input
                        disabled
                        placeholder="Недоступно"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Error">
                    <Input
                        error="Поле обязательно"
                        placeholder="Введите значение"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Full Width">
                    <Input
                        fullWidth
                        placeholder="Ширина 100%"
                    />
                </GuidelineBlock>

            </GuidelineGrid>
        </GuidelineSection>
    );
}