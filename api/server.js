import express from "express";
import dotenv from "dotenv";
import database from "./db.js";
import cors from "cors";
import categoriesRoute from "./routes/categoriesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import billsRoute from "./routes/billsRoute.js";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";

//! DOTENV CONFIG
dotenv.config();

// ! Call the express function
const app = express();

// ! Middlewares
app.use(express.json());
app.use(cors());

//! ROUTES
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);
app.use("/api/bills", billsRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

// ! Call the database function
database();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
