ALTER TABLE budgets
    ADD COLUMN category_id UUID;

ALTER TABLE budgets
    ADD CONSTRAINT fk_budget_category
        FOREIGN KEY (category_id)
            REFERENCES categories(id);

ALTER TABLE budgets
DROP COLUMN name;

DROP TABLE budget_categories;

CREATE INDEX idx_budgets_category
    ON budgets(category_id);