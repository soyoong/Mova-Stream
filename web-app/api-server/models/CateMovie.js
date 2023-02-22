const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cateMovieSchema = new Schema({
  name: { type: String, default: "" },
  genreId: { type: String, default: `${Schema.Types.ObjectId}`, ref: "Genre" },
});

module.exports = mongoose.model("CateMovie", cateMovieSchema);
