# HeroWall API

Professional Full-Stack Project Documentation: HeroWall Collectibles Platform

## 📋 Project Overview

HeroWall is a professional-grade digital collectibles platform where users collect, trade, and display virtual superhero cards on customizable digital walls. This project demonstrates mastery of modern full-stack development with enterprise-grade architecture, real-time features, and scalable solutions.

## 🏗️ Architecture

- **Domain-Driven Design (DDD)**
- **Clean Architecture**
- **Microservices-ready structure**
- **Event-Driven Architecture**
- **CQRS pattern implementation**

## 🛠️ Technology Stack

### Core Framework
- **NestJS 11** - Progressive Node.js framework
- **TypeScript 5** - Strict typing configuration
- **Express** - HTTP server foundation

### Database & Storage
- **MongoDB 7** - Primary database
- **Mongoose 8** - ODM with TypeScript support
- **Redis 7** - Caching & session management (configured but commented out)
- **Local File System** - Media asset storage (free alternative)

### Authentication & Security
- **JWT** - Stateless authentication
- **Passport.js** - Authentication strategies
- **bcrypt** - Password hashing
- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API request throttling

### Real-time Communication
- **Socket.IO 4** - Bidirectional real-time communication
- **WebSockets** - Low-latency connections

### Background Processing
- **BullMQ** - Redis-based job queue
- **Agenda** - Scheduling and cron jobs

### API Documentation
- **Swagger/OpenAPI 3** - Interactive API documentation

### Email Service
- **Nodemailer** - SMTP email service (free)
- Gmail/Yahoo/any SMTP provider

### Monitoring & Logging
- **Winston** - Structured logging
- **Morgan** - HTTP request logging

### Testing
- **Jest** - Unit & integration testing
- **Supertest** - HTTP assertions

### DevOps & Deployment
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- MongoDB (or use Docker)
- Redis (or use Docker)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd herowall-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start infrastructure services**
   ```bash
   docker-compose up -d mongodb elasticsearch
   # Redis is configured but commented out in the current setup
   ```

4. **Configure environment**
   ```bash
   # The .env file is already configured with default values
   # Update the following variables as needed:
   # - MONGODB_URI: Your MongoDB connection string
   # - JWT_SECRET: Your JWT secret key
   # - SMTP_*: Your email SMTP configuration
   ```

5. **Run the application**
   ```bash
   # Development
   npm run start:dev

   # Production
   npm run build
   npm run start:prod
   ```

### API Documentation

Once the application is running, visit `http://localhost:3000/api` for interactive Swagger documentation.

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response examples
- Authentication testing
- Schema definitions for all DTOs
- Interactive API testing interface

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📁 Project Structure

```
src/
├── app.controller.ts          # Root controller
├── app.module.ts              # Root module
├── app.service.ts             # Root service
├── main.ts                    # Application entry point
├── auth/                      # Authentication module
│   ├── dto/
│   │   ├── login.dto.ts       # Login data transfer object
│   │   └── register.dto.ts    # Registration data transfer object
│   ├── guards/
│   │   └── jwt-auth.guard.ts  # JWT authentication guard
│   ├── schemas/
│   │   └── user.schema.ts     # User MongoDB schema
│   ├── strategies/
│   │   └── jwt.strategy.ts    # JWT Passport strategy
│   ├── auth.controller.ts     # Authentication endpoints
│   ├── auth.module.ts         # Authentication module
│   └── auth.service.ts        # Authentication business logic
├── cards/                     # Cards management module
│   ├── dto/
│   │   └── create-card.dto.ts # Card creation DTO
│   ├── schemas/
│   │   └── card.schema.ts     # Card MongoDB schema
│   ├── cards.controller.ts    # Card CRUD endpoints
│   ├── cards.module.ts        # Cards module
│   └── cards.service.ts       # Card business logic
├── collections/               # Collections management module
│   ├── dto/
│   │   └── create-collection.dto.ts # Collection creation DTO
│   ├── schemas/
│   │   └── collection.schema.ts     # Collection MongoDB schema
│   ├── collections.controller.ts    # Collection CRUD endpoints
│   ├── collections.module.ts        # Collections module
│   └── collections.service.ts       # Collection business logic
├── config/                    # Configuration module
│   ├── config.module.ts       # Config module
│   ├── configuration.ts       # App configuration
│   └── validation.schema.ts   # Environment validation
├── database/                  # Database connection
│   └── database.module.ts     # MongoDB connection module
└── redis/                     # Redis connection (commented out)
    └── redis.module.ts        # Redis connection module
```

## 🔐 Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <token>
```

## 📊 API Modules

### Authentication Module
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/profile` - Get user profile

### Cards Module
- `GET /cards` - Get all cards (public)
- `POST /cards` - Create new card (authenticated)
- `GET /cards/:id` - Get card by ID (public)
- `PUT /cards/:id` - Update card (authenticated)
- `DELETE /cards/:id` - Delete card (authenticated)
- `GET /cards/user/my-cards` - Get user's own cards (authenticated)

### Collections Module
- `GET /collections` - Get user's collections (authenticated)
- `POST /collections` - Create new collection (authenticated)
- `GET /collections/:id` - Get collection by ID (authenticated)
- `PUT /collections/:id` - Update collection (authenticated)
- `DELETE /collections/:id` - Delete collection (authenticated)
- `POST /collections/:id/add-card/:cardId` - Add card to collection (authenticated)
- `POST /collections/:id/remove-card/:cardId` - Remove card from collection (authenticated)

## 📋 Environment Variables

The application uses the following environment variables (configured in `.env`):

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/herowall` |
| `JWT_SECRET` | JWT signing secret | Required |
| `JWT_EXPIRES_IN` | JWT access token expiration | `1h` |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | Required |
| `JWT_REFRESH_EXPIRES_IN` | JWT refresh token expiration | `604800` (7 days) |
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username | Required |
| `SMTP_PASS` | SMTP password/app password | Required |
| `FROM_EMAIL` | Sender email address | Required |
| `UPLOAD_DIR` | File upload directory | `uploads` |

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov
```

## 📦 Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Documentation

- [API Documentation](API_DOCS.md) - Complete API reference with examples
- [Swagger UI](http://localhost:3000/api) - Interactive API documentation (when running)
