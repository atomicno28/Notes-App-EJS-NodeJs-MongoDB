const mongoose = require("mongoose");

mongoose.set("strict", false);

// ASYNCHRONOUS DATABASE CONNECTION...
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
