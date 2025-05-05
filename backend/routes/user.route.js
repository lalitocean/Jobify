import express from "express";
import {
  login,
  logout,
  profileUpdate,
  register,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

// Register user  
router.post("/register", multerUpload, register);

// Login user
router.post("/login", login);

// Logout user
router.get("/logout", logout);

// Update user profile  
router.post("/profile/update", isAuthenticated, multerUpload, profileUpdate);

export default router;

