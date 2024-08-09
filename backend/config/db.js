// const mongoose = require("mongoose");
const dotenv = require("dotenv");

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Your database is connected");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config(); 



//  Updated upstream
const mongoURI = process.env.MONGO_URI;


dotenv.config();
// Stashed changes

const connectDb = async () => {
  try {
//  Updated upstream
    await mongoose.connect(mongoURI);
    console.log("Successfully connected to MongoDB");

    await mongoose.connect(process.env.MONGO_URI , {
    
    });
    console.log("Your database is connected");
//  Stashed changes
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};

module.exports = connectDb;
