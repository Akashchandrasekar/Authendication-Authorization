# Authentication API

A simple Node.js application with JWT-based authentication.

## Features
- User registration
- User login with JWT
- Token-based authorization
- Protected routes

## Installation
1. Clone the repo
2. Install dependencies: `npm install`
3. Add `.env` file with `MONGO_URI` and `JWT_SECRET`
4. Run the server: `npm start`

## API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user
- `GET /api/auth/me` - Get user info (protected)
