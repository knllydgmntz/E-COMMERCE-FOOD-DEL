import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://knllydgmntz3:kyuts123@cluster0.rueohbv.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
