package com.leviti.backend.modules.importer.parser;

import com.leviti.backend.modules.bank.enums.BankCode;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class ParserFactory {

    private final List<StatementParser> parsers;

    public ParserFactory(
            List<StatementParser> parsers
    ) {
        this.parsers = parsers;
    }

    public StatementParser getParser(
            BankCode bankCode
    ) {
        return parsers.stream()
                .filter(parser ->
                        parser.supportedBank() == bankCode
                )
                .findFirst()
                .orElseThrow(() ->
                        new IllegalArgumentException(
                                "Parser not found for bank: " + bankCode
                        )
                );
    }
}