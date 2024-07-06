import express, { Router } from "express";
import portfolioController from "../controllers/portfolioController"; // Corrected import path
//import { authenticateJWT } from "../middleware/auth.middleware";

const router: Router = express.Router();

// GET /portfolio
router.get("/", portfolioController.getPortfolioData);
router.get("/history", portfolioController.getTransactionHistory);

export default router;
