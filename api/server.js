import express from "express";
import dotenv from "dotenv";
import database from "./db.js";

//! DOTENV CONFIG
dotenv.config();

// ! Call the express function
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ! Call the database function
database();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
