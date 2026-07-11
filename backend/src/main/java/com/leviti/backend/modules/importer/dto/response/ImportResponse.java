package com.leviti.backend.modules.importer.dto.response;

public record ImportResponse(
        int importedRows,
        String message
) {
}