import Bills from "../models/billModel.js";

const getAllBills = async (req, res) => {
  try {
    const bills = await Bills.find();
    return res.status(200).json(bills);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createBills = async (req, res) => {
  try {
    const newBills = await Bills.create(req.body);
    return res.status(201).json(newBills);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllBills, createBills };
