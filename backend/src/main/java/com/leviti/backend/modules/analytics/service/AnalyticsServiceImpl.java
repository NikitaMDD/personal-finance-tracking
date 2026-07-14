package com.leviti.backend.modules.analytics.service;

import com.leviti.backend.modules.analytics.dto.AnalyticsSummaryResponse;
import com.leviti.backend.modules.analytics.dto.CategoryStatisticResponse;
import com.leviti.backend.modules.analytics.dto.DailyStatisticResponse;
import com.leviti.backend.modules.analytics.dto.MonthlyStatisticResponse;
import com.leviti.backend.modules.analytics.model.AnalyticsDateRange;
import com.leviti.backend.modules.analytics.util.AnalyticsDateUtils;
import com.leviti.backend.modules.transaction.repository.TransactionRepository;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnalyticsServiceImpl
        implements AnalyticsService {

    private final UserService userService;
    private final TransactionRepository transactionRepository;

    @Override
    public AnalyticsSummaryResponse summary(
            String email,
            LocalDate from,
            LocalDate to
    ) {

        UserEntity user =
                userService.findByEmail(email);

        AnalyticsDateRange range =
                AnalyticsDateUtils.normalize(
                        from,
                        to
                );

        BigDecimal income =
                transactionRepository
                        .getIncomeByPeriod(
                                user.getId(),
                                range.from(),
                                range.to()
                        );

        BigDecimal expense =
                transactionRepository
                        .getExpenseByPeriod(
                                user.getId(),
                                range.from(),
                                range.to()
                        );

        Long operations =
                transactionRepository
                        .getOperationsCountByPeriod(
                                user.getId(),
                                range.from(),
                                range.to()
                        );

        return new AnalyticsSummaryResponse(
                income,
                expense,
                income.subtract(expense),
                operations.intValue()
        );

    }

    @Override
    public List<CategoryStatisticResponse> categories(
            String email,
            LocalDate from,
            LocalDate to
    ) {

        UserEntity user =
                userService.findByEmail(email);

        AnalyticsDateRange range =
                AnalyticsDateUtils.normalize(
                        from,
                        to
                );

        return transactionRepository
                .getCategoryStatisticByPeriod(
                        user.getId(),
                        range.from(),
                        range.to()
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
            String email,
            LocalDate from,
            LocalDate to
    ) {

        UserEntity user =
                userService.findByEmail(email);

        AnalyticsDateRange range =
                AnalyticsDateUtils.normalize(
                        from,
                        to
                );

        return transactionRepository
                .getMonthlyStatisticByPeriod(
                        user.getId(),
                        range.from(),
                        range.to()
                )
                .stream()
                .map(row ->
                        new MonthlyStatisticResponse(

                                ((LocalDateTime) row[0])
                                        .toLocalDate(),

                                (BigDecimal) row[1],
                                (BigDecimal) row[2]

                        )
                )
                .toList();

    }

    @Override
    public List<DailyStatisticResponse> daily(
            String email,
            LocalDate from,
            LocalDate to
    ) {

        UserEntity user =
                userService.findByEmail(email);

        AnalyticsDateRange range =
                AnalyticsDateUtils.normalize(
                        from,
                        to
                );

        return transactionRepository
                .getDailyStatisticByPeriod(
                        user.getId(),
                        range.from(),
                        range.to()
                )
                .stream()
                .map(row ->
                        new DailyStatisticResponse(

                                ((java.sql.Date) row[0])
                                        .toLocalDate(),

                                (BigDecimal) row[1]

                        )
                )
                .toList();
    }
}