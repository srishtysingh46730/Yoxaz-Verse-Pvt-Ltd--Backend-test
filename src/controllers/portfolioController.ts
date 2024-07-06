import { Request, Response } from "express";
import calculatePortfolio from "../utils/calculatePortfolio";
import Transaction from "../models/transactionModel";

class PortfolioController {
  public async getPortfolioData(req: Request, res: Response): Promise<void> {
    try {
      const totalValue = await calculatePortfolio.getTotalPortfolioValue();
      console.log("value in total", totalValue);

      const assetAllocation = await calculatePortfolio.getAssetAllocation();
      const profitOrLoss = await calculatePortfolio.getProfitOrLoss();

      res.json({ totalValue, assetAllocation, profitOrLoss });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
  public async getTransactionHistory(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      // Fetch all transactions
      const transactions = await Transaction.find(); // Assuming Mongoose

      res.json(transactions);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

export default new PortfolioController();