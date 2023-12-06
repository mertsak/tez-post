import expres from "express";
import { getAllBills, createBills } from "../controllers/billsController.js";

const router = expres.Router();

router.route("/getAllBills").get(getAllBills);
router.route("/createBills").post(createBills);

export default router;
