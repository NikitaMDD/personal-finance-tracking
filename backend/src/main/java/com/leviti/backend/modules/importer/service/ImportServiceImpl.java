package com.leviti.backend.modules.importer.service;

import com.leviti.backend.modules.bank.entity.BankConnectionEntity;
import com.leviti.backend.modules.bank.repository.BankConnectionRepository;

import com.leviti.backend.modules.importer.dto.response.ImportResponse;
import com.leviti.backend.modules.importer.parser.ImportedTransaction;
import com.leviti.backend.modules.importer.parser.ParserFactory;
import com.leviti.backend.modules.importer.parser.StatementParser;

import com.leviti.backend.modules.importhistory.repository.ImportHistoryRepository;
import com.leviti.backend.modules.transaction.entity.TransactionEntity;
import com.leviti.backend.modules.transaction.repository.TransactionRepository;

import com.leviti.backend.modules.importhistory.entity.ImportHistoryEntity;
import com.leviti.backend.modules.importhistory.repository.ImportHistoryRepository;

import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;

import com.leviti.backend.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class ImportServiceImpl
        implements ImportService {

    private final ParserFactory parserFactory;

    private final TransactionRepository transactionRepository;

    private final BankConnectionRepository bankConnectionRepository;

    private final UserService userService;

    private final ImportHistoryRepository importHistoryRepository;

    @Override
    public ImportResponse importStatement(

            String email,

            UUID bankConnectionId,

            MultipartFile file

    ) throws IOException {

        UserEntity user =
                userService.findByEmail(email);

        BankConnectionEntity connection =
                bankConnectionRepository
                        .findById(bankConnectionId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Bank connection not found."
                                )
                        );

        StatementParser parser =
                parserFactory.getParser(
                        connection
                                .getBank()
                                .getCode()
                );

        List<ImportedTransaction> imported =
                parser.parse(file);

        for (ImportedTransaction transaction : imported) {
            TransactionEntity entity =
                    TransactionEntity.builder()
                            .user(user)
                            .bankConnection(connection)
                            .title(transaction.title())
                            .description(transaction.description())
                            .amount(transaction.amount())
                            .type(transaction.type())
                            .transactionDate(
                                    transaction.transactionDate()
                            )
                            .imported(true)
                            .build();
            transactionRepository.save(entity);
        }

        ImportHistoryEntity history =
                ImportHistoryEntity.builder()
                        .bankConnection(connection)
                        .fileName(file.getOriginalFilename())
                        .importedRows(imported.size())
                        .status("SUCCESS")
                        .build();

        importHistoryRepository.save(history);

        return new ImportResponse(
                imported.size(),
                "Import completed successfully."
        );
    }
}