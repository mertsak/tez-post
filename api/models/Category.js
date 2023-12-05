import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Categories", CategorySchema);

export default Category;
