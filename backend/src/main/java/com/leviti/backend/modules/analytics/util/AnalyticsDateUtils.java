package com.leviti.backend.modules.analytics.util;

import com.leviti.backend.modules.analytics.model.AnalyticsDateRange;

import java.time.LocalDate;
import java.time.LocalDateTime;

public final class AnalyticsDateUtils {

    private AnalyticsDateUtils() {}

    public static AnalyticsDateRange normalize(
            LocalDate from,
            LocalDate to
    ) {
        LocalDateTime start =
                from.atStartOfDay();

        LocalDateTime end =
                to.plusDays(1)
                        .atStartOfDay()
                        .minusNanos(1);

        return new AnalyticsDateRange(
                start,
                end
        );
    }
}