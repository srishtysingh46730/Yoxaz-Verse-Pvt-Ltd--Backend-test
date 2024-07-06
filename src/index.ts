import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db";
//import { authRouter, transactionRouter, portfolioRouter } from "./routes";
//import authRoutes from "./routes";
import transactionRouter from "./routes/transactionRoutes";
import portfolioRouter from "./routes/portfolioRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
//app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRouter);
app.use("/api/portfolio", portfolioRouter);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

