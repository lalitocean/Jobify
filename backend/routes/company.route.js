import express from "express";
import { multerUpload } from "../middlewares/multer.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Register a new company
router.post("/register", isAuthenticated, registerCompany);

// Get all companies 
router.get("/get", isAuthenticated, getCompany);

// Get a company by ID
router.get("/get/:id", isAuthenticated, getCompanyById);

// Update company info  
router.put("/update/:id", isAuthenticated, multerUpload, updateCompany);

export default router;
