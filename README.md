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
- **Redis 7** - Caching & session management
- **Amazon S3** - Media asset storage

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
   docker-compose up -d mongodb redis elasticsearch
   ```

4. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
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

Once the application is running, visit `http://localhost:3000/api` for Swagger documentation.

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📁 Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── dto/             # Data transfer objects
│   ├── guards/          # Auth guards
│   ├── schemas/         # Mongoose schemas
│   ├── strategies/      # Passport strategies
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── cards/               # Cards module
├── collections/         # Collections module
├── config/              # Configuration module
├── database/            # Database connection
├── redis/               # Redis connection
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
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
- `GET /cards` - Get all cards
- `POST /cards` - Create new card
- `GET /cards/:id` - Get card by ID
- `PUT /cards/:id` - Update card
- `DELETE /cards/:id` - Delete card

### Collections Module
- `GET /collections` - Get user collections
- `POST /collections` - Create collection
- `GET /collections/:id` - Get collection by ID
- `PUT /collections/:id` - Update collection
- `DELETE /collections/:id` - Delete collection

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
