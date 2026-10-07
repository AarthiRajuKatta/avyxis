CREATE TABLE IF NOT EXISTS mst_modules (
    module_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    module_name VARCHAR(255) NOT NULL,
    module_key VARCHAR(255) UNIQUE NOT NULL,
    module_icon VARCHAR(255),
    is_active TINYINT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT NOT NULL
);