const mongoose = require("mongoose");
const config = require("config");

const conn = config.get("MONGO_URI");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(conn, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
