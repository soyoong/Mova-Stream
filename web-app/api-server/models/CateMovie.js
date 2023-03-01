const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cateMovieSchema = new Schema({
  name: { type: String, default: "", unique: true },
  genreId: {
    type: mongoose.Types.ObjectId,
    ref: "Genre",
  },
});

module.exports = mongoose.model("CateMovie", cateMovieSchema);
