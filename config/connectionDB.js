
// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("DB connected");
//   } catch (error) {
//     console.log("Error connecting to DB:", error.message);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ Error connecting to DB:", error.message);
    process.exit(1);
  }
};