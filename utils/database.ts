import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "share_prompt",
    });
    console.log("DB connected");
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
