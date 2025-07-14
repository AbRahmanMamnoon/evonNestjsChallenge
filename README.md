# Business Dashboard API

A simple NestJS API with JWT authentication and messaging system.

## Features

- 🔐 **JWT Authentication** - Login with email only
- 👤 **User Profile** - Protected user endpoint
- 💬 **Messaging System** - Send and receive messages
- 📚 **API Documentation** - Swagger/OpenAPI docs
- ✅ **Input Validation** - Request validation with class-validator

## Quick Start

```bash
# Run the application
node dist/main.js

# Or with custom port
set PORT=3001 && node dist/main.js
```

## API Endpoints

### Authentication

- `POST /auth/login` - Login with email
- `GET /auth/validate` - Validate token
- `POST /auth/refresh` - Refresh token

### User

- `GET /user/me` - Get user profile (requires JWT)

### Messages

- `POST /messages` - Send message (requires JWT)
- `GET /messages` - Get messages (requires JWT)
- `PATCH /messages/:id/read` - Mark as read (requires JWT)

## Usage Example

```bash
# 1. Login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com"}'

# 2. Use the returned token for protected endpoints
curl -X GET http://localhost:3001/user/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Documentation

- **Swagger UI**: http://localhost:3001/api
- **Application**: http://localhost:3001

## Tech Stack

- NestJS
- JWT Authentication
- Class Validator
- Swagger/OpenAPI
- In-memory storage
