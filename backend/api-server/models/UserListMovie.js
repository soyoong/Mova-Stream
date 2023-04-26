const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    movies: [
      {
        name: String,
        movieId: { type: String, default: `${Schema.Types.ObjectId}`, ref: "Movie" },
      },
    ],
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date || null, default: null },
    userId: { type: String, default: `${Schema.Types.ObjectId}`, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserListMovie", listSchema);
