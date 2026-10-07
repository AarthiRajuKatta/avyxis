CREATE TABLE IF NOT EXISTS tbl_company_modules (
    company_module_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    module_id BIGINT NOT NULL,
    is_active TINYINT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT NOT NULL,

    FOREIGN KEY (company_id)
    REFERENCES mst_companies(company_id),

    FOREIGN KEY (module_id)
    REFERENCES mst_modules(module_id)
);