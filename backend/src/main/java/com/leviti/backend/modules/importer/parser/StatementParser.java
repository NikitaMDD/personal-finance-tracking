package com.leviti.backend.modules.importer.parser;

import com.leviti.backend.modules.bank.enums.BankCode;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StatementParser {
    BankCode supportedBank();
    List<ImportedTransaction> parse(
            MultipartFile file
    ) throws IOException;
}