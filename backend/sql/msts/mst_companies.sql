CREATE TABLE IF NOT EXISTS mst_companies (
    company_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(255) NOT NULL,
    company_code VARCHAR(100) UNIQUE NOT NULL,
    db_name VARCHAR(255) UNIQUE NOT NULL,
    company_email VARCHAR(255),
    company_phone VARCHAR(50),
    is_active TINYINT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT NOT NULL
);