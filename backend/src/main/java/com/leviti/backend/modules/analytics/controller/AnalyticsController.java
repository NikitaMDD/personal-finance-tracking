package com.leviti.backend.modules.analytics.controller;

import com.leviti.backend.modules.analytics.dto.*;
import com.leviti.backend.modules.analytics.service.AnalyticsService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    @GetMapping("/summary")
    public AnalyticsSummaryResponse summary(
            Principal principal,
            @RequestParam LocalDate from,
            @RequestParam LocalDate to
    ) {

        return analyticsService.summary(
                principal.getName(),
                from,
                to
        );

    }

    @GetMapping("/categories")
    public List<CategoryStatisticResponse> categories(
            Principal principal,
            @RequestParam LocalDate from,
            @RequestParam LocalDate to
    ) {

        return analyticsService.categories(
                principal.getName(),
                from,
                to
        );

    }

    @GetMapping("/monthly")
    public List<MonthlyStatisticResponse> monthly(
            Principal principal,
            @RequestParam LocalDate from,
            @RequestParam LocalDate to
    ) {

        return analyticsService.monthly(
                principal.getName(),
                from,
                to
        );

    }

    @GetMapping("/daily")
    public List<DailyStatisticResponse> daily(
            Principal principal,
            @RequestParam LocalDate from,
            @RequestParam LocalDate to
    ) {

        return analyticsService.daily(
                principal.getName(),
                from,
                to
        );

    }

}