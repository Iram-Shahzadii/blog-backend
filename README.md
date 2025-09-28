📌 Blog Backend – MERN Stack

A fully functional backend API for a Blog Application, built using Node.js, Express.js, and MongoDB Atlas.
This backend handles authentication, blog CRUD operations, image uploads, and follows best practices for production-ready APIs.


---

⚙️ Features

🔐 User Authentication (JWT) – Secure login & signup.

📝 Blog CRUD Operations – Create, Read, Update, Delete blogs.

🖼️ Image Uploads – Upload blog and author images.

🛡️ Middleware Security – Authentication & validation.

📁 Modular Folder Structure – Easy to maintain and scale.

🌍 MongoDB Atlas Integration – Cloud-based database connection.



---

🛠️ Tech Stack

Node.js – Runtime environment

Express.js – Web framework

MongoDB Atlas – Database

Mongoose – ODM for MongoDB

JWT (JSON Web Token) – Authentication

Multer – File/image uploads



---

🚀 Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/Iram-Shahzadii/blog-backend.git
cd blog-backend

2️⃣ Install dependencies

npm install

3️⃣ Add Environment Variables

Create a .env file in the root directory:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Start the server

npm run server

Server will run on:
👉 http://localhost:4000


---

📡 API Endpoints

Method	Endpoint	Description	Auth Required

POST	/api/auth/signup	Register a new user	❌
POST	/api/auth/login	User login	❌
GET	/api/blogs	Get all blogs	❌
POST	/api/blogs	Create new blog	✅
PUT	/api/blogs/:id	Update blog by ID	✅
DELETE	/api/blogs/:id	Delete blog by ID	✅



---

⚠️ Note on Deployment

Currently, backend deployment is disabled due to free-hosting limitations.
👉 But the codebase is fully functional and can be run locally.


---

👩‍💻 Author

Iram Shahzadi

🌐 GitHub: Iram-Shahzadii



---

📜 License

This project is licensed under the MIT License – free to use and modify.
