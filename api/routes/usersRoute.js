import expres from "express";
import { getAllUsers, getAUser } from "../controllers/usersController.js";

const router = expres.Router();

router.route("/getAllUsers").get(getAllUsers);
router.route("/getAUser").get(getAUser);

export default router;
