package com.leviti.backend.modules.category.service;

import com.leviti.backend.modules.category.entity.CategoryEntity;
import com.leviti.backend.modules.category.entity.CategoryType;
import com.leviti.backend.modules.category.repository.CategoryRepository;
import com.leviti.backend.modules.user.entity.UserEntity;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DefaultCategoryServiceImpl
        implements DefaultCategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public void createDefaultCategories(
            UserEntity user
    ) {

        categoryRepository.saveAll(
                List.of(

                        // ---------- Расходы ----------

                        category(
                                user,
                                "Продукты",
                                "shopping-basket",
                                "#22C55E",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Транспорт",
                                "car",
                                "#3B82F6",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Дом",
                                "house",
                                "#8B5CF6",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Развлечения",
                                "gamepad",
                                "#F97316",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Здоровье",
                                "health",
                                "#EF4444",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Одежда",
                                "shirt",
                                "#EC4899",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Образование",
                                "education",
                                "#0EA5E9",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Рестораны",
                                "restaurant",
                                "#F59E0B",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Подарки",
                                "gift",
                                "#A855F7",
                                CategoryType.EXPENSE
                        ),

                        category(
                                user,
                                "Прочее",
                                "wallet",
                                "#64748B",
                                CategoryType.EXPENSE
                        ),

                        // ---------- Доходы ----------

                        category(
                                user,
                                "Зарплата",
                                "salary",
                                "#22C55E",
                                CategoryType.INCOME
                        ),

                        category(
                                user,
                                "Подарок",
                                "gift",
                                "#A855F7",
                                CategoryType.INCOME
                        ),

                        category(
                                user,
                                "Прочие доходы",
                                "wallet",
                                "#64748B",
                                CategoryType.INCOME
                        )

                )
        );

    }

    private CategoryEntity category(
            UserEntity user,
            String name,
            String icon,
            String color,
            CategoryType type
    ) {

        return CategoryEntity.builder()
                .user(user)
                .name(name)
                .icon(icon)
                .color(color)
                .type(type)
                .build();

    }

}