package com.leviti.backend.modules.analytics.service;

import com.leviti.backend.modules.analytics.dto.*;
import com.leviti.backend.modules.transaction.repository.TransactionRepository;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnalyticsServiceImpl
        implements AnalyticsService {
    private final UserService userService;
    private final TransactionRepository transactionRepository;

    @Override
    public AnalyticsSummaryResponse summary(
            String email
    ) {
        UserEntity user =
                userService.findByEmail(email);

        BigDecimal income =
                transactionRepository.getIncome(
                        user.getId()
                );

        BigDecimal expense =
                transactionRepository.getExpense(
                        user.getId()
                );

        return new AnalyticsSummaryResponse(
                income,
                expense,
                income.subtract(expense)
        );
    }

    @Override
    public List<CategoryStatisticResponse> categories(
            String email
    ) {
        UserEntity user =
                userService.findByEmail(email);

        return transactionRepository
                .getCategoryStatistic(
                        user.getId()
                )
                .stream()
                .map(row ->
                        new CategoryStatisticResponse(
                                (String) row[0],
                                (BigDecimal) row[1]
                        )
                )
                .toList();
    }

    @Override
    public List<MonthlyStatisticResponse> monthly(
            String email
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return transactionRepository
                .getMonthlyStatistic(
                        user.getId()
                )
                .stream()
                .map(row ->
                        new MonthlyStatisticResponse(

                                ((Timestamp) row[0])
                                        .toLocalDateTime()
                                        .toLocalDate(),

                                (BigDecimal) row[1],

                                (BigDecimal) row[2]

                        )
                )
                .toList();
    }
}