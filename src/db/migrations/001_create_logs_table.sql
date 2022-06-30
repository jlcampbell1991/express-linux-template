CREATE TYPE e_logs_level AS ENUM(
    'debug',
    'info',
    'warn',
    'error'
);


CREATE TABLE IF NOT EXISTS logs (
    id UUID NOT NULL,
    level e_logs_level NOT NULL,
    message TEXT NOT NULL,
    created_at timestamp with time zone NOT NULL,
    PRIMARY KEY(id)
);