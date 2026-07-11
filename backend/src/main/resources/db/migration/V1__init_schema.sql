CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- USERS

CREATE TABLE users
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(30),
    avatar_url TEXT,
    role VARCHAR(30) NOT NULL DEFAULT 'USER',
    premium BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- SETTINGS

CREATE TABLE settings
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE,
    theme VARCHAR(20) NOT NULL,
    language VARCHAR(20) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    month_start_day SMALLINT NOT NULL,
    email_notifications BOOLEAN NOT NULL DEFAULT TRUE,
    push_notifications BOOLEAN NOT NULL DEFAULT TRUE,
    budget_notifications BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_settings_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);

-- BANKS

CREATE TABLE banks
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(30) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    logo VARCHAR(255),
    color VARCHAR(30),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- BANK CONNECTIONS

CREATE TABLE bank_connections
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    bank_id UUID NOT NULL,
    external_account_id VARCHAR(255),
    connected BOOLEAN NOT NULL DEFAULT TRUE,
    connected_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_bank_connection_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_bank_connection_bank
        FOREIGN KEY (bank_id)
            REFERENCES banks(id)
);

-- CATEGORIES

CREATE TABLE categories
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(100),
    color VARCHAR(30),
    type VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_category_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,

    CONSTRAINT chk_category_type
        CHECK (type IN ('INCOME', 'EXPENSE'))
);

-- BUDGETS

CREATE TABLE budgets
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    limit_amount NUMERIC(15,2) NOT NULL,
    spent_amount NUMERIC(15,2) NOT NULL DEFAULT 0,
    period VARCHAR(20) NOT NULL,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_budget_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,

    CONSTRAINT chk_budget_period
        CHECK (period IN ('WEEK', 'MONTH', 'YEAR'))
);

-- BUDGET CATEGORIES

CREATE TABLE budget_categories
(
    budget_id UUID NOT NULL,
    category_id UUID NULL,
    PRIMARY KEY (budget_id, category_id),

    CONSTRAINT fk_budget_categories_budget
        FOREIGN KEY (budget_id)
            REFERENCES budgets(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_budget_categories_category
        FOREIGN KEY (category_id)
            REFERENCES categories(id)
            ON DELETE CASCADE
);

-- TRANSACTIONS

CREATE TABLE transactions
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    category_id UUID NOT NULL,
    bank_connection_id UUID,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    amount NUMERIC(15,2) NOT NULL,
    type VARCHAR(20) NOT NULL,
    transaction_date TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_transaction_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_transaction_category
        FOREIGN KEY (category_id)
            REFERENCES categories(id),

    CONSTRAINT fk_transaction_bank
        FOREIGN KEY (bank_connection_id)
            REFERENCES bank_connections(id)
            ON DELETE SET NULL,

    CONSTRAINT chk_transaction_type
        CHECK (type IN ('INCOME', 'EXPENSE'))
);

-- IMPORT HISTORY

CREATE TABLE import_history
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bank_connection_id UUID NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    imported_rows INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT fk_import_bank_connection
        FOREIGN KEY (bank_connection_id)
            REFERENCES bank_connections(id)
            ON DELETE CASCADE
);

-- REFRESH TOKENS

CREATE TABLE refresh_tokens
(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    token TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    revoked BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT fk_refresh_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);

-- INDEXES

CREATE INDEX idx_categories_user
    ON categories(user_id);

CREATE INDEX idx_budgets_user
    ON budgets(user_id);

CREATE INDEX idx_transactions_user
    ON transactions(user_id);

CREATE INDEX idx_transactions_category
    ON transactions(category_id);

CREATE INDEX idx_transactions_bank
    ON transactions(bank_connection_id);

CREATE INDEX idx_transactions_date
    ON transactions(transaction_date);

CREATE INDEX idx_bank_connections_user
    ON bank_connections(user_id);

CREATE INDEX idx_import_history_bank
    ON import_history(bank_connection_id);

CREATE INDEX idx_refresh_tokens_user
    ON refresh_tokens(user_id);