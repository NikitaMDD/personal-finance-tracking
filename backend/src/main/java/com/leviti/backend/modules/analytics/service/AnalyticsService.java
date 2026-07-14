package com.leviti.backend.modules.analytics.service;
import com.leviti.backend.modules.analytics.dto.*;

import java.time.LocalDate;
import java.util.List;

public interface AnalyticsService {

    AnalyticsSummaryResponse summary(
            String email,
            LocalDate from,
            LocalDate to
    );

    List<CategoryStatisticResponse> categories(
            String email,
            LocalDate from,
            LocalDate to
    );

    List<MonthlyStatisticResponse> monthly(
            String email,
            LocalDate from,
            LocalDate to
    );

    List<DailyStatisticResponse> daily(
            String email,
            LocalDate from,
            LocalDate to
    );
}