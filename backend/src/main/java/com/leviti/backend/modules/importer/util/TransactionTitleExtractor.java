package com.leviti.backend.modules.importer.util;

public final class TransactionTitleExtractor {

    private TransactionTitleExtractor() {
    }

    public static String extract(
            String description
    ) {

        if (description == null || description.isBlank()) {
            return "Без названия";
        }

        String normalized = description
                .replace("\n", " ")
                .replace("\r", " ")
                .trim();

        if (normalized.contains("Сообщение")) {
            normalized = normalized.substring(
                    0,
                    normalized.indexOf("Сообщение")
            );
        }

        if (normalized.contains("Идентификатор")) {
            normalized = normalized.substring(
                    0,
                    normalized.indexOf("Идентификатор")
            );
        }

        if (normalized.length() > 60) {
            normalized =
                    normalized.substring(
                            0,
                            60
                    ) + "...";

        }

        return normalized.trim();
    }
}