import express from "express";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriesController.js";

const router = express.Router();

router.route("/getAllCategories").get(getAllCategories);
router.route("/createCategory").post(createCategory);
router.route("/updateCategory").put(updateCategory);
router.route("/deleteCategory").delete(deleteCategory);

export default router;
