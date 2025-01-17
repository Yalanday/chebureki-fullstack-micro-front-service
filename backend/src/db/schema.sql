CREATE TABLE IF NOT EXISTS directors (
                                         id INT AUTO_INCREMENT PRIMARY KEY,
                                         name VARCHAR(255) NOT NULL,
                                         lastname  VARCHAR(255) NOT NULL,
                                         password VARCHAR(255) NOT NULL,
                                         status VARCHAR(255) DEFAULT 'directors',
                                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS semidirectors (
                                             id INT AUTO_INCREMENT PRIMARY KEY,
                                             name VARCHAR(255) NOT NULL,
                                             lastname  VARCHAR(255) NOT NULL,
                                             password VARCHAR(255) NOT NULL,
                                             status VARCHAR(255) DEFAULT 'semidirectors',
                                             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
