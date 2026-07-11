package com.leviti.backend.modules.category.controller;

import com.leviti.backend.modules.category.dto.request.CreateCategoryRequest;
import com.leviti.backend.modules.category.dto.request.UpdateCategoryRequest;
import com.leviti.backend.modules.category.dto.response.CategoryResponse;
import com.leviti.backend.modules.category.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public CategoryResponse create(
            Principal principal,
            @Valid @RequestBody CreateCategoryRequest request
    ) {
        return categoryService.create(
                principal.getName(),
                request
        );
    }

    @GetMapping
    public List<CategoryResponse> findAll(
            Principal principal
    ) {
        return categoryService.findAll(
                principal.getName()
        );
    }

    @GetMapping("/{id}")
    public CategoryResponse findById(
            Principal principal,
            @PathVariable UUID id
    ) {
        return categoryService.findById(
                principal.getName(),
                id
        );
    }

    @PatchMapping("/{id}")
    public CategoryResponse update(
            Principal principal,
            @PathVariable UUID id,
            @Valid @RequestBody UpdateCategoryRequest request
    ) {
        return categoryService.update(
                principal.getName(),
                id,
                request
        );
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(
            Principal principal,
            @PathVariable UUID id
    ) {
        categoryService.delete(
                principal.getName(),
                id
        );
    }
}