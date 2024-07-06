import mongoose from "mongoose";
const url =
  "mongodb+srv://himanshu:0JBpALgIkVuZhy54@nodeexpressproject.fcqfdja.mongodb.net/portfolio?retryWrites=true&w=majority&appName=NodeExpressProject";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
    process.exit(1);
  }
};

export default connectDB;