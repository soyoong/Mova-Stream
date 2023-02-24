const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: { type: String, default: "", unique: true },
    email: { type: String, default: "", unique: true },
    password: { type: String, default: "" },
    phone: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    avatar: { type: String, default: "" },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Export models
module.exports = mongoose.model("User", userSchema);
