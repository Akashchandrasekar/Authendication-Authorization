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

## overview postman link
https://web.postman.co/workspace/87ff17a0-e7e0-4064-87ca-1d9a2f74a0d2/documentation/39168683-49761e6b-6aef-46c4-b03a-0dbd92858266
