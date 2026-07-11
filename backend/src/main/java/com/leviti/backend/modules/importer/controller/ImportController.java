package com.leviti.backend.modules.importer.controller;

import com.leviti.backend.modules.importer.dto.response.ImportResponse;
import com.leviti.backend.modules.importer.service.ImportService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.UUID;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
public class ImportController {

    private final ImportService importService;

    @PostMapping("/{bankConnectionId}")
    public ImportResponse importStatement(

            Principal principal,

            @PathVariable
            UUID bankConnectionId,

            @RequestParam
            MultipartFile file

    ) throws IOException {

        return importService.importStatement(
                principal.getName(),
                bankConnectionId,
                file
        );
    }
}