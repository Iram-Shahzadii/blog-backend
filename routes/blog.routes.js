import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { upload } from "../middlewares/multer.js";
import {
  allBlogs,
  createBlog,
  deleteBlog,
  userBlogs,
  // singleBlog, // import if you want a route for fetching a single blog
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create", isAuthenticated, upload.single("image"), createBlog);
router.get("/all", allBlogs);
router.delete("/delete/:id", isAuthenticated, deleteBlog);
router.get("/user/blogs", isAuthenticated, userBlogs);
// router.get("/single/:id", singleBlog); // uncomment if needed

export default router;

