package com.leviti.backend.modules.importer.resolver;

import com.leviti.backend.modules.category.entity.CategoryEntity;
import com.leviti.backend.modules.category.repository.CategoryRepository;
import com.leviti.backend.modules.transaction.entity.TransactionType;
import com.leviti.backend.modules.user.entity.UserEntity;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class TransactionCategoryResolver {

    private final CategoryRepository categoryRepository;

    public CategoryEntity resolve(

            UserEntity user,

            String bankCategory,

            String description,

            TransactionType type

    ) {

        log.info("========================================");
        log.info("Bank category : {}", bankCategory);
        log.info("Description   : {}", description);
        log.info("Type          : {}", type);

        /*
         * 1. Пытаемся использовать категорию банка
         */
        if (
                bankCategory != null &&
                        !bankCategory.isBlank()
        ) {

            log.info(
                    "Trying bank category '{}'",
                    bankCategory
            );

            CategoryEntity category =
                    findCategory(
                            user,
                            bankCategory
                    );

            if (category != null) {

                log.info(
                        "✓ Category resolved from bank: {}",
                        category.getName()
                );

                return category;

            }

            log.info(
                    "✗ Bank category '{}' not found.",
                    bankCategory
            );

        }

        /*
         * 2. Пробуем определить по описанию
         */
        String detectedCategory =
                detectCategory(
                        description,
                        type
                );

        log.info(
                "Detected category: {}",
                detectedCategory
        );

        CategoryEntity category =
                findCategory(
                        user,
                        detectedCategory
                );

        if (category != null) {

            log.info(
                    "✓ Category resolved from description: {}",
                    category.getName()
            );

            return category;

        }

        /*
         * 3. Fallback
         */
        log.info(
                "Fallback -> Прочее"
        );

        return categoryRepository
                .findByUser_IdAndNameIgnoreCase(
                        user.getId(),
                        "Прочее"
                )
                .orElseThrow(() ->
                        new IllegalStateException(
                                "Категория 'Прочее' не найдена."
                        )
                );

    }

    private CategoryEntity findCategory(
            UserEntity user,
            String name
    ) {

        log.info(
                "Searching category '{}'",
                name
        );

        CategoryEntity category =
                categoryRepository
                        .findByUser_IdAndNameIgnoreCase(
                                user.getId(),
                                name
                        )
                        .orElse(null);

        if (category == null) {

            log.info(
                    "Category '{}' NOT FOUND",
                    name
            );

        } else {

            log.info(
                    "Category '{}' FOUND (id={})",
                    category.getName(),
                    category.getId()
            );

        }

        return category;

    }

    private String detectCategory(
            String description,
            TransactionType type
    ) {

        if (type == TransactionType.INCOME) {

            return "Доходы";

        }

        String text =
                description == null
                        ? ""
                        : description.toLowerCase();

        /*
         * Продукты
         */
        if (
                contains(
                        text,

                        "пятерочка",
                        "pyaterochka",

                        "магнит",
                        "magnit",

                        "перекресток",
                        "perekrestok",

                        "лента",
                        "lenta",

                        "дикси",
                        "dixy",

                        "вкусвилл",
                        "vkusvill",

                        "ашан",
                        "auchan",

                        "spar",

                        "fix price",

                        "красное",
                        "белое",
                        "krasnoe",
                        "bristol",

                        "mcc: 5411",
                        "mcc:5411",

                        "mcc: 5499",
                        "mcc:5499"
                )
        ) {

            return "Продукты";

        }

        /*
         * Транспорт
         */
        if (
                contains(
                        text,

                        "яндекс",
                        "yandex",

                        "uber",

                        "такси",
                        "taxi",

                        "metro",

                        "mos.transport",

                        "transport",

                        "автобус",

                        "ржд",

                        "cppk",

                        "mcc: 4111",
                        "mcc:4111",

                        "mcc: 4121",
                        "mcc:4121"
                )
        ) {

            return "Транспорт";

        }

        /*
         * Покупки
         */
        if (
                contains(
                        text,

                        "ozon",

                        "wildberries",
                        "wb",

                        "amazon",

                        "aliexpress",

                        "market.yandex"
                )
        ) {

            return "Покупки";

        }

        /*
         * Развлечения
         */
        if (
                contains(
                        text,

                        "steam",

                        "playstation",

                        "spotify",

                        "netflix",

                        "ivi",

                        "кинопоиск",

                        "kinopoisk",

                        "youtube"
                )
        ) {

            return "Развлечения";

        }

        /*
         * Здоровье
         */
        if (
                contains(
                        text,

                        "аптека",

                        "фарма",

                        "горздрав",

                        "pharmacy"
                )
        ) {

            return "Здоровье";

        }

        /*
         * ЖКХ
         */
        if (
                contains(
                        text,

                        "жкх",

                        "газ",

                        "электро",

                        "электричество",

                        "вода",

                        "интернет",

                        "ростелеком",

                        "мгтс"
                )
        ) {

            return "Коммунальные услуги";

        }

        /*
         * Переводы
         */
        if (
                contains(
                        text,

                        "перевод",

                        "сбп",

                        "быстрых платежей",

                        "другому клиенту",

                        "transfer"
                )
        ) {

            return "Переводы";

        }

        return "Прочее";

    }

    private boolean contains(
            String text,
            String... keywords
    ) {

        for (String keyword : keywords) {

            if (
                    text.contains(
                            keyword.toLowerCase()
                    )
            ) {
                return true;
            }

        }

        return false;

    }

}