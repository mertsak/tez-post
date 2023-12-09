import Category from "../models/categoryModel.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const newcategory = await Category.create(req.body);
    return res.status(201).json(newcategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { _id, title } = req.body;

    const updateCategory = await Category.findByIdAndUpdate(
      _id,
      { title },
      {
        new: true,
      }
    );

    return res.status(200).json(updateCategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { _id } = req.body;

    const deleleteCategory = await Category.findByIdAndDelete(_id);

    return res.status(200).json(deleleteCategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllCategories, createCategory, updateCategory, deleteCategory };
