🛡️ User Authentication, Post & Comment Management System

Welcome to the User Authentication, Post & Comment Management System, a powerful backend system designed for handling users, posts, and comments. Built with Node.js, Express, and MongoDB, this project provides a seamless experience for user registration, login, token-based authentication, and managing posts and comments with ease.
Here are some basic commands to get this project started:

1. Clone the Repository

git clone https://github.com/Mehtashaab/CRUD-in-Express.git

2. Navigate into the Project Directory

cd your-repo-name

3. Install Dependencies

npm install

4. Set Up Environment Variables

Create a .env file in the project root and add your environment variables:

makefile

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_access_token_secret

REFRESH_TOKEN_SECRET=your_refresh_token_secret

5. Run the Project

To start the project, use the following command:


npm start




🚀 Features
User Authentication & Token Management 🔑

User Registration with Avatar Upload
Login/Logout with Secure Cookie Management
Access & Refresh Tokens for seamless authentication
Token Refreshing to extend user sessions securely

Post Management 📝

Create, Read, Update, and Delete (CRUD) operations for blog posts
Efficiently manage posts with title and description fields

Comment Management 💬

Add, View, Update, and Delete comments linked to posts
Comments include user details like name and email for better interaction

📑 API Overview
🔐 User Endpoints
Register a New User
POST /user/register
Register a user by sending fullname, username, email, password, and an avatar image.

Login
POST /user/login
Login by sending username and password. Get accessToken and refreshToken for secure sessions.

Logout
POST /user/logout
Log out the user and remove their session securely.

Refresh Token
POST /user/refresh-token
Refresh an expired access token using the provided refreshToken.

📝 Post Endpoints

Create a New Post
POST /posts
Submit a new post with title and description.

View All Posts
GET /posts
Retrieve a list of all blog posts.

View a Specific Post
GET /posts/:id
Fetch a post by its unique id.

Update Post
PUT /posts/:id
Edit a post’s title or description.

Delete Post
DELETE /posts/:id
Remove a post by its id.

💬 Comment Endpoints

Add a Comment
POST /comments
Submit a comment linked to a postId, along with name, email, and content.

View All Comments
GET /comments
Retrieve all comments across posts.

View a Comment by ID
GET /comments/:id
Fetch a specific comment by its id.

Update a Comment
PUT /comments/:id
Modify an existing comment by updating name, email, or content.

Delete Comment
DELETE /comments/:id
Remove a comment by its id.

🛠️ Tech Stack

Node.js: Backend JavaScript runtime

Express: Fast and flexible web framework

MongoDB: NoSQL database for storing data

JWT: JSON Web Tokens for secure user authentication

Mongoose: MongoDB object modeling tool

multer: Middleware for handling file uploads

bcrypt: Password hashing and validation
