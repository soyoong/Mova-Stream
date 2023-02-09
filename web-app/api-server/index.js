const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", true); // To suppress errors when run "DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7"
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connected successfully 🎉🎉🎉"))
  .catch((err) => {
    console.error(err);
  });

app.listen(8800, () => {
  console.log("Backend server is running!");
});