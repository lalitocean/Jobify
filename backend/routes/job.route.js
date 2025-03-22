import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJob,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/getadminjob").post(isAuthenticated, getAdminJobs);
router.route("/get/:id").post(isAuthenticated, getJobById);

export default router;
