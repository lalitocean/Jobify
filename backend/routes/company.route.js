import express from "express";

import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller";
import isAuthenticated from "../middlewares/isAuthenticated";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").post(isAuthenticated, getCompany);
router.route("/get/:id").post(isAuthenticated, getCompanyById);
router.route("/update/:id").post(isAuthenticated, updateCompany);

export default router;
