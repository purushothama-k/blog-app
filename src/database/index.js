import mongoose from "mongoose";

const connectToDB = (async) => {
  const DB = process.env.DATABASE_URL.replace(
    "<db_password>",
    process.env.DATABASE_PASSWORD
  );

  console.log(DB);

  mongoose
    .connect(DB)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log(error));
};

export default connectToDB;
