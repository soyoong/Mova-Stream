const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newMovieSchema = new Schema({
  createdDate: { type: Date || null, default: Date.now() },
  updatedDate: { type: Date || null, default: null },
  countryId: {
    type: String,
    default: `${Schema.Types.ObjectId}`,
    ref: "Country",
  },
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
  cateMovies: [
    {
      name: { type: String, default: "" },
      cateMovieId: {
        type: String,
        default: `${Schema.Types.ObjectId}`,
        ref: "CateMovie",
      },
    },
  ],
  originalLanguage: { type: String, default: "" },
  releaseDate: { type: Date || null, default: null },
  genreId: { type: String, default: `${Schema.Types.ObjectId}`, ref: "Genre" },
});

module.exports = mongoose.model("NewMovie", newMovieSchema);
