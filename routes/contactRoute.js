import express from "express";
const router = express.Router();
import {handleContactFormSubmission } from "../controllers/contactController.js";

// POST /api/contact route
router.post("/", handleContactFormSubmission);

export default router;
