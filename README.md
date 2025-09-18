# Notes Manager App (MERN)

A robust full-stack application designed to efficiently manage personal notes, featuring secure user authentication, comprehensive CRUD operations, and a polished user interface.

## Features

- **User Authentication:** Secure registration and login using email and password, powered by JWT.
- **Notes Management:** Create, read, update, and delete personal notes.
- **Protected Routes:** JWT-based authorization ensures data privacy.
- **Modern UI/UX:** Responsive, animated interface built with React and Framer Motion for a professional experience.
- **Admin Dashboard (Optional):**
  - View all users
  - View all notes
  - Delete inappropriate notes

## Tech Stack

- **Frontend:** React, React Router, Axios, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB

## Getting Started

### Prerequisites

- Node.js & npm installed
- MongoDB Atlas account or access to a MongoDB instance

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following environment variables:
   ```
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```
   > Example MongoDB URI:
   > `mongodb+srv://Notes:klu@cluster0.iz6cxkx.mongodb.net/`
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## Environment Variables

Configure the following in your `.env` files:

**Backend:**
- `MONGO_URI` – MongoDB connection string
- `JWT_SECRET` – Secret key for JWT signing

**Frontend:**
- Update API base URL if needed in your configuration (e.g., `.env` or Axios setup).

## Admin Features

If enabled, administrators can:
- View all registered users
- View all notes stored in the database
- Delete inappropriate notes

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or raise issues for feature requests and bug reports!
