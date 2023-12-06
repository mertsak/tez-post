import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
    return res.status(200).json(Users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAUser = async (req, res) => {
  try {
    const { _id } = req.body;
    const aUser = await User.findById(_id);
    res.status(200).json(aUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllUsers, getAUser };
