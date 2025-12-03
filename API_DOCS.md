# HeroWall API Documentation

## Overview

HeroWall is a professional digital collectibles platform API built with NestJS, providing comprehensive card and collection management with JWT authentication.

## Base URL
```
http://localhost:3000
```

## Authentication

The API uses JWT (JSON Web Token) authentication. Include the token in the Authorization header for protected endpoints:

```
Authorization: Bearer <your-jwt-token>
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (201):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Get User Profile
```http
GET /auth/profile
Authorization: Bearer <access-token>
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "user",
  "isEmailVerified": false,
  "isActive": true,
  "createdAt": "2025-12-03T14:00:00.000Z",
  "updatedAt": "2025-12-03T14:00:00.000Z"
}
```

## Cards API

### Get All Cards
```http
GET /cards
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Super Hero Card",
    "description": "A powerful superhero card",
    "imageUrl": "https://example.com/card-image.jpg",
    "rarity": "legendary",
    "power": 100,
    "abilities": ["Flight", "Super Strength"],
    "creatorId": "507f1f77bcf86cd799439012",
    "isActive": true,
    "createdAt": "2025-12-03T14:00:00.000Z",
    "updatedAt": "2025-12-03T14:00:00.000Z"
  }
]
```

### Get Card by ID
```http
GET /cards/{id}
```

**Parameters:**
- `id` (path): Card ID

**Response (200):** Same as individual card object above

### Create Card
```http
POST /cards
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Super Hero Card",
  "description": "A powerful superhero card",
  "imageUrl": "https://example.com/card-image.jpg",
  "rarity": "legendary",
  "power": 100,
  "abilities": ["Flight", "Super Strength"],
  "metadata": {
    "level": 1,
    "experience": 0
  }
}
```

**Response (201):** Created card object

### Update Card
```http
PUT /cards/{id}
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Updated Super Hero Card",
  "power": 120
}
```

**Response (200):** Updated card object

### Delete Card
```http
DELETE /cards/{id}
Authorization: Bearer <access-token>
```

**Response (200):** Deleted card object

### Get User's Cards
```http
GET /cards/user/my-cards
Authorization: Bearer <access-token>
```

**Response (200):** Array of user's cards

## Collections API

### Get User Collections
```http
GET /collections
Authorization: Bearer <access-token>
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "userId": "507f1f77bcf86cd799439012",
    "name": "My Superhero Collection",
    "description": "A collection of powerful superhero cards",
    "cardIds": ["507f1f77bcf86cd799439013", "507f1f77bcf86cd799439014"],
    "wishlistCardIds": ["507f1f77bcf86cd799439015"],
    "isPublic": false,
    "isActive": true,
    "createdAt": "2025-12-03T14:00:00.000Z",
    "updatedAt": "2025-12-03T14:00:00.000Z"
  }
]
```

### Create Collection
```http
POST /collections
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "My Superhero Collection",
  "description": "A collection of powerful superhero cards",
  "cardIds": ["507f1f77bcf86cd799439013"],
  "wishlistCardIds": ["507f1f77bcf86cd799439015"],
  "isPublic": false
}
```

**Response (201):** Created collection object

### Get Collection by ID
```http
GET /collections/{id}
Authorization: Bearer <access-token>
```

**Response (200):** Collection object

### Update Collection
```http
PUT /collections/{id}
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Updated Collection Name",
  "description": "Updated description"
}
```

**Response (200):** Updated collection object

### Delete Collection
```http
DELETE /collections/{id}
Authorization: Bearer <access-token>
```

**Response (200):** Deleted collection object

### Add Card to Collection
```http
POST /collections/{collectionId}/add-card/{cardId}
Authorization: Bearer <access-token>
```

**Response (200):** Updated collection object with card added

### Remove Card from Collection
```http
POST /collections/{collectionId}/remove-card/{cardId}
Authorization: Bearer <access-token>
```

**Response (200):** Updated collection object with card removed

## Data Models

### User
```typescript
{
  _id: string;
  email: string;
  password: string; // Hashed
  firstName?: string;
  lastName?: string;
  isEmailVerified: boolean;
  role: string; // 'user' | 'admin'
  googleId?: string;
  githubId?: string;
  avatar?: string;
  isTwoFactorEnabled: boolean;
  twoFactorSecret?: string;
  lastLoginAt?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Card
```typescript
{
  _id: string;
  name: string;
  description?: string;
  imageUrl: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  power: number;
  abilities?: string[];
  creatorId: string;
  isActive: boolean;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
```

### Collection
```typescript
{
  _id: string;
  userId: string;
  name: string;
  description?: string;
  cardIds: string[];
  wishlistCardIds: string[];
  isPublic: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## Error Responses

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must be longer than or equal to 6 characters"
  ],
  "error": "Bad Request"
}
```

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Not Found"
}
```

### 409 Conflict
```json
{
  "statusCode": 409,
  "message": "User already exists"
}
```

## Rate Limiting

The API includes rate limiting to prevent abuse. Default limits:
- 100 requests per 15 minutes per IP

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | Yes |
| `SMTP_HOST` | SMTP server host | Yes |
| `SMTP_USER` | SMTP username | Yes |
| `SMTP_PASS` | SMTP password | Yes |
| `FROM_EMAIL` | Sender email | Yes |

## Development

### Running the API
```bash
# Install dependencies
npm install

# Start MongoDB
docker-compose up -d mongodb

# Run in development mode
npm run start:dev
```

### API Documentation
- Swagger UI: `http://localhost:3000/api`
- This document: `API_DOCS.md`

## Support

For questions or issues, please refer to the main README.md file or create an issue in the repository.