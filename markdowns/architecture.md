# Project Architecture Overview

This project is a full-stack web application consisting of a React frontend and a Node.js/Express backend, organized into separate directories. The architecture follows a client-server model with a strong emphasis on security and modularity.

## 1. Backend Architecture (Node.js & Express)

The backend follows a classic **Model-View-Controller (MVC)**-like layered architecture pattern, designed for separation of concerns and maintainability.

### Key Technologies
- **Framework:** Express.js
- **Database:** MySQL (using `mysql2`)
- **Security:** Helmet, CORS, express-rate-limit, xss-clean, hpp, csurf, express-mongo-sanitize.
- **Authentication:** JWT (JSON Web Tokens) & bcryptjs

### Directory Structure & Responsibilities
- **`config/`**: Configuration files (e.g., Database connection, CORS, Security middleware setup).
- **`controllers/`**: Contains the core business logic. These functions handle incoming requests, interact with models, and send responses.
- **`models/`**: Data access layer. Defines the database schemas and handles interactions with the MySQL database.
- **`routes/`**: Defines the API endpoints and maps them to the corresponding controller functions.
- **`middleware/`**: Custom Express middlewares (e.g., authentication checks, error handling).
- **`utils/`**: Helper functions and utility classes used across the application.
- **`constants/`**: Application-wide constants and configurations.
- **`sql/`**: Contains raw SQL scripts or migration files.
- **`scripts/`**: Utility scripts (e.g., seeding data, maintenance).
- **`tests/`**: Automated tests.

## 2. Frontend Architecture (React)

The frontend is a single-page application (SPA) built using React.

### Key Technologies
- **Library:** React 19
- **Build Tool:** Create React App (`react-scripts`)
- **Testing:** React Testing Library, Jest

### Directory Structure
- **`src/`**: Contains the main source code for the React application. It includes the following subdirectories:
  - **`global/`**: Contains globally shared resources such as:
    - **`api/`**: API integration services and endpoint definitions.
    - **`assets/`**: Images, icons, and other static files.
    - **`components/`**: Reusable React UI components.
    - **`css/`**: Global stylesheets and style variables.
    - **`pages/`**: Main page components representing different routes.
    - **`sections/`**: Larger page sections or specific layout blocks.
    - **`utils/`**: Helper functions and shared utilities.
  - **`features/`**: Contains feature-specific, self-contained modules to help scale the app by isolating domain logic. It currently includes:
    - **`public/`**: A domain folder intended for public-facing features (e.g., landing pages, unauthenticated views). A typical feature module like this will contain its own localized subdirectories such as:
      - **`components/`**: UI components specific to the public feature.
      - **`api/`**: API calls related to public-facing data.
      - **`hooks/`**: Custom React hooks scoped to this feature.
      - **`utils/`**: Helper functions specific to this domain.
      - **`css/`**: Stylesheets specific to this feature.
      - **`pages/`**: Page components specific to this feature.
      - **`sections/`**: Section components specific to this feature.
    -feature-1
    -feature-2
    ...
    -feature-n

## Summary

The project is structured to scale efficiently. The frontend acts as an independent client communicating with the backend via RESTful APIs. The backend is tightly secured with multiple protective layers and organizes its code cleanly by separating routing, business logic, and database operations.
