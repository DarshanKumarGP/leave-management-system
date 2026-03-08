# Leave Management System

A simple web application where employees can apply for leave and employers can approve or reject those requests.

This project was developed as part of a technical assignment for HuskyVoice.AI.

---

## Features

### Employee
- Sign up and login
- Apply for leave
- View leave application status (Pending / Approved / Rejected)

### Employer
- Sign up and login
- View all leave requests
- Approve or reject leave applications

---

## Tech Stack

Frontend:
- Vue.js
- Tailwind CSS
- Vue Router

Backend:
- Node.js
- Express.js
- REST API
- JWT Authentication

Database:
- MongoDB Atlas

Deployment:
- Frontend: Vercel
- Backend: Render

---

## Project Structure
leave-management-system
│
├── backend
│ ├── config
│ │ db.js
│ ├── models
│ │ User.js
│ │ Leave.js
│ ├── routes
│ │ authRoutes.js
│ │ leaveRoutes.js
│ ├── middleware
│ │ authMiddleware.js
│ ├── server.js
│ └── .env
│
├── frontend
│ ├── src
│ │ ├── pages
│ │ │ Signup.vue
│ │ │ Login.vue
│ │ │ EmployeeDashboard.vue
│ │ │ EmployerDashboard.vue
│ │ ├── components
│ │ │ Navbar.vue
│ │ ├── services
│ │ │ api.js
│ │ ├── router
│ │ │ index.js
│ │ └── App.vue
│
└── README.md


---

# Installation and Setup

## 1. Clone Repository

```bash
git git clone https://github.com/DarshanKumarGP/leave-management-system.git
cd leave-management-system

Backend Setup

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend server:

npm run dev

Backend runs on:

http://localhost:5000

Frontend Setup

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Start frontend:

npm run dev

Frontend runs on:

http://localhost:5173
API Endpoints
Authentication

Signup

POST /api/auth/signup

Login

POST /api/auth/login
Employee

Apply leave

POST /api/leaves/apply

View own leaves

GET /api/leaves/my
Employer

View all leave requests

GET /api/leaves/all

Approve / Reject leave

PUT /api/leaves/:id
Authentication

JWT based authentication is used.

After login the backend returns:

token
role

The frontend stores the token and sends it with requests using the Authorization header.

Role Based Access

Two user roles exist:

Employee
Employer

Employee:

Apply for leave

View leave status

Employer:

View all leave requests

Approve or reject leave

Deployment

Frontend deployed on:

Vercel

Backend deployed on:

Render

Database hosted on:

MongoDB Atlas
Environment Variables

Backend requires the following variables:

PORT
MONGO_URI
JWT_SECRET

These are stored securely in .env.

Future Improvements

Admin-based role management

Leave balance tracking

Email notifications

Audit logs

Author
Darshan Kumar GP

