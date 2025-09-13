import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import path from "path";

dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);
const app = express();
app.use(cors());   
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads"))); // serve uploaded images

// Connect to MongoDB
connectDB();

// Routes
app.use("/users", userRoutes);
app.use("/blog", blogRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

