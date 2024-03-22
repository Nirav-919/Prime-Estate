# Prime Estate

This project is a Real Estate application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It also uses Tailwind CSS for styling, Vite for build tooling, React Redux for state management, JWT (JSON Web Tokens) for authentication and Firebase for additional services.

The application allows users to browse through listings, filter properties based on various criteria, view property details, and contact agents for further inquiries.

## Features

1. **User Authentication:** Users can sign up and log in securely to access personalized features.The users can also sign in through their google account.
2. **Property Listings:** Display a list of available properties fetched from the backend.Users can view property details, including images,location, description, price and amenities.
3. **Filtering and Sorting:** Implemented filtering options to allow users to refine property listings based on amenities, offers and property type. Sorting options enable users to arrange listings by price and time.
4. **Search Functionality:** Users can search for properties using keywords or specific criteria.
5. **Agent Contact:** Users can contact agents for inquiries or property viewings. Integration with email for communication.
6. **User profile**: Users can update their profile and create listings by using CRUD Functionality.
7. **Responsive Design:** Ensure the application is optimized for various devices and screen sizes, providing a seamless user experience across desktop and mobile platforms.

## Technologies Used

- **MongoDB:** Database for storing properties information and user profile data.
- **Express.js:** Backend framework for handling server-side logic and API endpoints.
- **React.js:** Frontend library for building interactive user interfaces.
- **Node.js:** JavaScript runtime environment for running the server-side code.
- **Tailwind CSS:** Utility-first CSS framework for styling the UI components.
- **Vite:** Fast, opinionated web dev build tool that serves your code via native ES Module imports during development.
- **React Redux:** State management library for managing application state and data flow within React components.
- **JWT (JSON Web Tokens):** Securely authenticate users and manage sessions.
- **Firebase:** Cloud-based services for authentication, storage, and additional functionalities like real-time database updates and analytics.

## Installation and Setup

1. Clone the repository or download it as zip:

```bash
git clone https://github.com/Nirav-919/Prime-Estate.git
```

2. Navigate to the project directory:

```bash
cd Prime-Estate
```

3. Install dependencies for both frontend and backend:

```bash
npm install
cd client && npm install
```

4. Set up environment variables:

- Create a .env file in the root directory and add necessary environment variables.

```bash
MONGO = 
JWT_SECRET = 
```
- Also create .env in client directory and add necessary environment variable.

```bash
VITE_FIREBASE_API_KEY = 
```

5. Open a terminal and start the backend server:

```bash
npm run dev
```

6. Open another terminal and start the frontend development server:

```bash
cd client && npm run dev
```

7. Open your browser and navigate to localhost created by the frontend development server to view the application.