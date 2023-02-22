const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  createdDate: { type: Date, default: Date.now() },
  updatedDate: { type: Date || null, default: null },
  movies: [
    {
      name: { type: String, default: "" },
      movieId: {
        type: String,
        default: `${Schema.Types.ObjectId}`,
        ref: "Movie",
      },
    },
  ],
  userId: { type: String, default: `${Schema.Types.ObjectId}`, ref: "User" },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
