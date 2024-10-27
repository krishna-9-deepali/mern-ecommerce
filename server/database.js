const mongoose = require("mongoose");
// require("dotenv").config();
const connectDB = () => {
  //connection to db

  // try {
  //   await mongoose.connect(process.env.MONGO_URL);
  //   console.log("MongoDB connected");
  // } catch (error) {
  //   console.error(`Error: ${error.message}`);
  // }
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));
};
module.exports = connectDB;
