import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  type: 'deposit' | 'withdrawal' | 'buy' | 'sell';
  amount: number;
  asset?: string;
  price?: number;
  date: Date;
}

const TransactionSchema: Schema = new Schema({
  type: { type: String, enum: ['deposit', 'withdrawal', 'buy', 'sell'], required: true },
  amount: { type: Number, required: true },
  asset: { type: String },
  price: { type: Number },
  date: { type: Date, required: true, default: Date.now },
});

const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema);

export default Transaction;