const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: { type: String, default: "" },
    email: {
      type: String,
      require: true,
      unique: true,
      sparse: true,
    },
    password: { type: String, default: "" },
    phone: { type: String || null, default: null },
    isAdmin: { type: Boolean, default: false },
    avatar: { type: String, default: "" },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Export models
module.exports = mongoose.model("User", userSchema);
