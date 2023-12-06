import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.route("/getAllProducts").get(getAllProducts);
router.route("/createProduct").post(createProduct);
router.route("/updateProduct").put(updateProduct);
router.route("/deleteProduct").delete(deleteProduct);

export default router;
