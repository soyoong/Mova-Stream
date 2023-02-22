const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", true); // To suppress errors when run "DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7"
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully 🎉🎉🎉"))
  .catch((err) => {
    console.error(err);
  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
// User routes
const authUserRoutes = require("./routes/auth.user.route");
const userRoutes = require("./routes/user.route");

// Auth route api..
app.use("/api/auth", authUserRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Backend server is running with port: ${process.env.PORT}`);
});
