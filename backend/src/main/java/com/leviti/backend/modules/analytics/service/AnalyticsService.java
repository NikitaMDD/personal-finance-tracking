package com.leviti.backend.modules.analytics.service;
import com.leviti.backend.modules.analytics.dto.*;
import java.util.List;

public interface AnalyticsService {
    AnalyticsSummaryResponse summary(
            String email
    );
    List<CategoryStatisticResponse> categories(
            String email
    );
    List<MonthlyStatisticResponse> monthly(
            String email
    );
}