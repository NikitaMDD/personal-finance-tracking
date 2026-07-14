package com.leviti.backend.modules.analytics.model;
import java.time.LocalDateTime;

public record AnalyticsDateRange(
        LocalDateTime from,
        LocalDateTime to
) {}