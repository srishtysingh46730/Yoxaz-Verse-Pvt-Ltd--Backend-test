import express, { Router } from "express";
import transactionController from "../controllers/transaction.controller";
//import { authenticateJWT } from "../middleware/auth.middleware";

const router: Router = express.Router();

// POST /transactions
router.post("/", transactionController.createTransaction);

// GET /transactions/:id
router.get("/:id", transactionController.getTransactionById);

export default router;
