import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kyuts123:kyuts123@kyuts.tsquxyt.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
