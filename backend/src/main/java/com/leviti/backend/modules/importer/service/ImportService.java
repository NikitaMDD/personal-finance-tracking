package com.leviti.backend.modules.importer.service;
import com.leviti.backend.modules.importer.dto.response.ImportResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

public interface ImportService {
    ImportResponse importStatement(
            String email,
            UUID bankConnectionId,
            MultipartFile file
    ) throws IOException;
}