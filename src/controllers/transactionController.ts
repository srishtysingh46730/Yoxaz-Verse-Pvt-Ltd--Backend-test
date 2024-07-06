import { Request, Response } from "express";
import Transaction, { ITransaction } from "../models/transactionModel";

class TransactionController {
  public async createTransaction(req: Request, res: Response): Promise<void> {
    try {
      const newTransaction: ITransaction = new Transaction(req.body);
      await newTransaction.save();
      res.status(201).json(newTransaction);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  public async getTransactionById(req: Request, res: Response): Promise<void> {
    try {
      const transaction: ITransaction | null = await Transaction.findById(
        req.params.id
      );
      if (!transaction) throw new Error("Transaction not found");
      res.json(transaction);
    } catch (err) {
      res.status(404).json({ error: err });
    }
  }
}

export default new TransactionController();