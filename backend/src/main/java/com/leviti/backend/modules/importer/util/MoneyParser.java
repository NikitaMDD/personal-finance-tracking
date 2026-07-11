package com.leviti.backend.modules.importer.util;
import java.math.BigDecimal;

public final class MoneyParser {

    private MoneyParser() {
    }

    public static BigDecimal parse(
            String value
    ) {
        if (value == null || value.isBlank()) {
            return BigDecimal.ZERO;
        }

        String normalized = value
                .replace("\u00A0", "")
                .replace(" ", "")
                .replace(",", ".")
                .trim();
        return new BigDecimal(normalized);
    }

    public static boolean isEmpty(
            String value
    ) {
        return value == null || value.isBlank();
    }
}