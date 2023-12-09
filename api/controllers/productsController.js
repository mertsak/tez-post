import Product from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { _id, title, price, category, img } = req.body;

    const updateProduct = await Product.findByIdAndUpdate(
      _id,
      { title, price, category, img },
      { new: true }
    );

    return res.status(200).json(updateProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.body;

    const deleteProduct = await Product.findByIdAndDelete(_id);

    return res.status(200).json(deleteProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllProducts, createProduct, updateProduct, deleteProduct };
