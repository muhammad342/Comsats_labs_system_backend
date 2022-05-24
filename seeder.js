const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const User = require("./models/userModel");
const users = require("./data/user");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.insertMany(users);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
