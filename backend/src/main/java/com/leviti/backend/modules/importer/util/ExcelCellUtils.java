package com.leviti.backend.modules.importer.util;

import org.apache.poi.ss.usermodel.Cell;

public final class ExcelCellUtils {

    private ExcelCellUtils() {
    }

    public static String getString(Cell cell) {

        return switch (cell.getCellType()) {

            case STRING ->
                    cell.getStringCellValue();

            case NUMERIC ->
                    String.valueOf(
                            cell.getNumericCellValue()
                    );

            case BOOLEAN ->
                    String.valueOf(
                            cell.getBooleanCellValue()
                    );

            default ->
                    "";
        };
    }
}