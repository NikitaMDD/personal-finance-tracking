// Отказался от него убрать в некст пушах 

import { Upload } from "lucide-react";

import { Button } from "@/shared/ui/button";

export function ImportStatementButton() {
    return (
        <Button
            variant="primary"
            size="md"
        >
            <Upload size={18} />

            Импорт выписки
        </Button>
    );
}