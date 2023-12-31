import mongoose from "mongoose";

const database = () => {
  try {
    mongoose
      .connect(`${process.env.MONGO_URI}`)
      .then(() => console.log("Database Connected"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export default database;
