![MovieMania-poster](/Banner.png)

**MovieMania: A Netflix-Inspired Movie App**

**Project Overview**

MovieMania is a web application inspired by Netflix, allowing users to discover and watch movies. It utilizes the MERN stack (MongoDB, Express.js, React.js, and Node.js) for a robust and scalable architecture.

**Tech Stack**

**Frontend:**

- **React.js:** A JavaScript library for building user interfaces.
- **Material-UI:** A React component library for implementing Google's Material Design.
- **Redux-Toolkit:** A simplified state management library built on top of Redux.
- **React-Persist:** A library for persisting Redux state across page refreshes.
- **React-Router-Dom:** A library for handling client-side routing in React applications.
- **React-Icons:** A collection of SVG icons for React projects.
- **React-Hot-Toast:** A library for displaying customizable notifications.
- **Axios:** A promise-based HTTP client for making API requests.

**Backend:**

- **Node.js:** A JavaScript runtime environment for building server-side applications.
- **Express.js:** A Node.js framework for web applications.

**Database:**

- **MongoDB:** A NoSQL document database with flexible data models.
- **Mongoose:** An ORM (Object-Relational Mapper) that simplifies interactions with MongoDB in Node.js.

**Features:**

- **User Registration and Login:** Users can create accounts with encrypted passwords (using bcryptjs) for secure authentication.
- **JWT Authentication:** JSON Web Tokens are used for user authentication and authorization.
- **Password Reset and Forget Password:** Users can reset their passwords through email-based confirmation (using Nodemailer).
- **Movie Discovery:** Explore a collection of movies with rich details.
- **Movie Search:** Search for movies by title or other relevant criteria.

**Installation**

1. Clone this repository: `git clone https://github.com/D-singh121/moviemania_netflix_clone.git`
2. Install dependencies:
   - Navigate to the project directory: `cd moviemania`
   - Navigate to frontend and backend directory : ` cd frontend or cd backend`
   - Run `npm install` (or `yarn install` if using yarn)

**Running the Application**

1. Start the backend server: `npm run dev ` (or `yarn server:start`)
2. Start the frontend development server: `npm run dev` (or `yarn start`)

**API Endpoints for backend side** (Replace with actual endpoint URLs)

- `/api/v1/user/register`: POST - Register a new user
- `/api/v1/user/login`: POST - Login a user
- `/api/v1/user/logout`: GET - Logout a user
- `/api/v1/user/forget-password`: POST - Initiate password reset
- `/api/v1/user/resetPassword/:resetToken`: PUT - Reset password using token

**API Endpoints for frontend side** (Replace with actual endpoint URLs)
notice: we have used **TMDB** to fetch the movies so you will need these keys , just go to **TMDB** website and signup there. after successfull sign in you can genrate **API_KEY** and **API_ACCESS_TOKEN**;

- `TMDB_API_KEY='paste your tmdb api key here'`
- `TMDB_API_READ_ACCESS_TOKEN='paste your access token here'`

**All frontend apis are present on folder **frontend/src/utils/constants.js**

**Don't forgot to change your database_name and other credentials**

- `PORT=8000  `:  backend app running on port 8000
- `JWTSECRET="keep descen't string here"`
- `JWT_EXPIRE=7d`: token expires in 7days
- `COOKIE_EXPIRE=5`

- `MONGODB_URL=mongodb+srv://<your_mongodb_user_name>:<your_mongodb_user_password>@cluster0.u4c45gt.mongodb.net`
- `DB_NAME=your database-name`
- `FRONTEND_URL=http://localhost:5173`

- `ADMIN_EMAIL=your_admin-email-id`
- `ADMIN_EMAIL_PASSWORD= admin password`

**Further Development**

This project serves as a solid foundation for a full-fledged movie streaming platform. You can extend it by implementing features like:

- Movie playback functionality
- User recommendations
- Watchlist management
- User profile management (ratings, reviews)

**Contribution**

Feel free to contribute to this project by creating pull requests for bug fixes, feature enhancements, or code improvements.

**Disclaimer**

This project is for educational purposes only. It does not include actual movie data or streaming functionality. Consider ethical and legal implications when developing similar applications.
