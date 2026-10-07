CREATE TABLE IF NOT EXISTS tbl_role_screen_permissions (
    permission_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    role_id BIGINT NOT NULL,
    module_id BIGINT NOT NULL,
    screen_id BIGINT NOT NULL,
    can_view TINYINT DEFAULT 0,
    can_create TINYINT DEFAULT 0,
    can_edit TINYINT DEFAULT 0,
    can_delete TINYINT DEFAULT 0,
    is_active TINYINT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT NOT NULL,

    FOREIGN KEY (role_id)
    REFERENCES tbl_roles(role_id)
);