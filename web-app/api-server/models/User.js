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
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date || null, default: null },
    status: { type: String, enum: ["Pending", "Active"], default: "Pending" },
  },
  { timestamps: true }
);

// Export models
module.exports = mongoose.model("User", userSchema);
