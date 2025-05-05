import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJob,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

// Apply for a job  
router.post("/apply/:id", isAuthenticated, applyJob);

router.get("/applied", isAuthenticated, getAppliedJob);

// Get applicants for a specific job  
router.get("/:id/applicants", isAuthenticated, getApplicants);

// Update application status (e.g., approved/rejected)
router.put("/status/:id", isAuthenticated, updateStatus);

export default router;

