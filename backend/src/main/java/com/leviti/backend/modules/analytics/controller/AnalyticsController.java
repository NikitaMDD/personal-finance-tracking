package com.leviti.backend.modules.analytics.controller;

import com.leviti.backend.modules.analytics.dto.*;
import com.leviti.backend.modules.analytics.service.AnalyticsService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    @GetMapping("/summary")
    public AnalyticsSummaryResponse summary(
            Principal principal
    ) {

        return analyticsService.summary(
                principal.getName()
        );

    }

    @GetMapping("/categories")
    public List<CategoryStatisticResponse> categories(
            Principal principal
    ) {

        return analyticsService.categories(
                principal.getName()
        );

    }

    @GetMapping("/monthly")
    public List<MonthlyStatisticResponse> monthly(
            Principal principal
    ) {

        return analyticsService.monthly(
                principal.getName()
        );

    }

}