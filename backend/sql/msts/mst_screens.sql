CREATE TABLE IF NOT EXISTS mst_screens (
    screen_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    module_id BIGINT NOT NULL,
    screen_name VARCHAR(255) NOT NULL,
    screen_key VARCHAR(255) UNIQUE NOT NULL,
    route_path VARCHAR(500),
    component_path VARCHAR(500),
    is_active TINYINT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT NOT NULL,

    FOREIGN KEY (module_id)
    REFERENCES mst_modules(module_id)
);