package com.leviti.backend.modules.importer.util;

public final class TransactionTitleExtractor {

    private TransactionTitleExtractor() {
    }

    public static String extract(

            String category,

            String description

    ) {

        if (
                category != null &&
                        !category.isBlank() &&
                        !"Прочие операции".equalsIgnoreCase(category)
        ) {

            return category.trim();

        }

        if (
                description == null ||
                        description.isBlank()
        ) {

            return "Без названия";

        }

        String normalized =
                description
                        .replace("\n", " ")
                        .replace("\r", " ")
                        .trim();

        if (
                normalized.startsWith(
                        "Категория:"
                )
        ) {

            normalized =
                    normalized.substring(
                                    "Категория:".length()
                            )
                            .trim();

        }

        int dot =
                normalized.indexOf('.');

        if (dot > 0) {

            normalized =
                    normalized.substring(
                            0,
                            dot
                    );

        }

        if (
                normalized.length() > 60
        ) {

            normalized =
                    normalized.substring(
                            0,
                            60
                    );

        }

        return normalized.trim();

    }

}