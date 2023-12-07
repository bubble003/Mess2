import mongoose from "mongoose";
console.log("Welcome to mongoose");
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

const Connection = async () => {
  console.log("go to db connect");
  const url = process.env.DATABASE;
  console.log(url);
  await mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("Connection Successfull");
    })
    .catch((e) => {
      console.log("Error of db :", e);
    });
};

const connection = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected ${con.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};

export default Connection;
