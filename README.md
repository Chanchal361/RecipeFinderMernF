

# Recipe Finder App

This is a simple and intuitive recipe finder application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search for recipes based on ingredients, cuisines, and dietary preferences.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search recipes by ingredients, cuisines, and dietary restrictions.
- User authentication and profile management.
- Save favorite recipes for quick access.
- Responsive design for mobile and desktop users.
- Simple and intuitive user interface.

## Technologies Used

- **MongoDB**: NoSQL database for storing recipe data and user information.
- **Express.js**: Web framework for building the backend API.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side logic.
- **Axios**: For making HTTP requests.
- **Redux**: For state management (optional).
- **Bootstrap**: For responsive styling.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- MongoDB

### Clone the repository

```bash
git clone https://github.com/yourusername/recipe-finder-app.git
cd recipe-finder-app
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and set up your environment variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Use the search bar to find recipes based on your preferences.
- Register for an account to save your favorite recipes.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.

### Recipes

- `GET /api/recipes`: Get all recipes.
- `GET /api/recipes/:id`: Get a single recipe by ID.
- `POST /api/recipes`: Add a new recipe (authenticated users only).
- `PUT /api/recipes/:id`: Update a recipe (authenticated users only).
- `DELETE /api/recipes/:id`: Delete a recipe (authenticated users only).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss improvements.

