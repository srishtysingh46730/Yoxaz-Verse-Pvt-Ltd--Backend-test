import Transaction from "../models/transactionModel";
const currentAssetPrices: Record<string, number> = {
  Bitcoin: 35000,
  Ethereum: 2500,
  Litecoin: 150,
};
export default {
  async getTotalPortfolioValue(): Promise<number> {
    // Fetch all transactions
    const transactions = await Transaction.find(); // Assuming Mongoose

    let totalValue = 0;
    console.log("value");

    // Calculate current value based on transactions and current prices
    transactions.forEach((transaction) => {
      const currentPrice = currentAssetPrices[transaction.asset || ""];
      console.log("submitted");

      if (currentPrice) {
        console.log("12");

        if (transaction.type === "buy" || transaction.type === "deposit") {
          totalValue += transaction.amount * currentPrice;
          console.log(totalValue);

          console.log("2345");
        } else if (
          transaction.type === "sell" ||
          transaction.type === "withdrawal"
        ) {
          totalValue -= transaction.amount * currentPrice;
        }
      }
    });
    console.log("totalvalue", totalValue);

    return totalValue;
  },

  async getAssetAllocation(): Promise<Record<string, number>> {
    // Fetch all transactions
    const transactions = await Transaction.find(); // Assuming Mongoose

    const assetAllocation: Record<string, number> = {};

    // Calculate allocation based on transactions
    transactions.forEach((transaction) => {
      const currentPrice = currentAssetPrices[transaction.asset || ""];
      if (currentPrice) {
        if (!assetAllocation[transaction.asset || ""]) {
          assetAllocation[transaction.asset || ""] = 0;
        }
        if (transaction.type === "buy" || transaction.type === "deposit") {
          assetAllocation[transaction.asset || ""] +=
            transaction.amount * currentPrice;
        } else if (
          transaction.type === "sell" ||
          transaction.type === "withdrawal"
        ) {
          assetAllocation[transaction.asset || ""] -=
            transaction.amount * currentPrice;
        }
      }
    });

    return assetAllocation;
  },
  async getProfitOrLoss(): Promise<number> {
    // Fetch all transactions
    const transactions = await Transaction.find(); // Assuming Mongoose

    let totalCost = 0;
    let currentValue = 0;

    // Calculate total cost and current value based on transactions and current prices
    transactions.forEach((transaction) => {
      const currentPrice = currentAssetPrices[transaction.asset || ""];
      if (currentPrice) {
        if (transaction.type === "buy") {
          totalCost += transaction.amount * transaction.price!;
        } else if (transaction.type === "sell") {
          totalCost -= transaction.amount * transaction.price!;
        }
        currentValue += transaction.amount * currentPrice;
      }
    });

    // Calculate profit or loss
    const profitOrLoss = currentValue - totalCost;
    return profitOrLoss;
  },
};