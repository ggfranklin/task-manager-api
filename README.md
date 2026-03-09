# 📋 Task Manager API

> REST API for task management with JWT authentication, built as a portfolio project.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Node](https://img.shields.io/badge/node-18+-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📌 About

A RESTful API that allows users to register, authenticate, and manage their personal tasks. Built with Node.js, Express, and PostgreSQL using Prisma ORM.

This project was developed as a portfolio piece to demonstrate backend development skills including authentication, database modeling, API documentation, and testing.

---

## 🚀 Technologies

| Technology | Purpose |
|---|---|
| **Node.js + Express** | Server and routing |
| **PostgreSQL** | Relational database |
| **Prisma ORM** | Database modeling and migrations |
| **JWT + bcrypt** | Authentication and password hashing |
| **Swagger UI** | Interactive API documentation |
| **Jest + Supertest** | Automated testing |
| **Docker** | Containerization |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/task-manager-api
cd task-manager-api

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your values

# 4. Start the database
docker-compose up -d

# 5. Run database migrations
npx prisma migrate dev

# 6. Start the server
npm run dev
```

The API will be running at `http://localhost:3000`

---

## 📄 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://admin:senha123@localhost:5432/taskapi"
JWT_SECRET="your-secret-key-here"
PORT=3000
```

---

## 📚 API Documentation

After starting the server, access the interactive Swagger documentation at:

```
http://localhost:3000/api-docs
```

---

## 🛣️ API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login and receive JWT token |

### Tasks — 🔒 Requires authentication
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/tasks` | List all tasks for the authenticated user |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update a task |
| `DELETE` | `/tasks/:id` | Delete a task |

---

## 🧪 Running Tests

```bash
npm test
```

---

## 🐳 Running with Docker

```bash
# Start the entire application (API + database)
docker-compose up

# Run in background
docker-compose up -d
```

---

## 📁 Project Structure

```
src/
├── controllers/    # Route logic
├── middlewares/    # Authentication, error handling
├── routes/         # Route definitions
├── prisma/         # Database schema and migrations
└── utils/          # Helper functions
server.js           # Entry point
```

---

## 🌐 Live Demo

> 🚧 Deploy coming soon

---

## 👤 Author

Made by **[Your Name]** — feel free to reach out!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black)](https://github.com/your-username)
