import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJob,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

// Create a new job post (admin/authenticated)
router.post("/post", isAuthenticated, postJob);

// Get all jobs  
router.get("/get", isAuthenticated, getAllJob);

// Get all jobs created by admin user
router.get("/adminjob", isAuthenticated, getAdminJobs);

// Get a specific job by ID
router.get("/get/:id", isAuthenticated, getJobById);

export default router;
