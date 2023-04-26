const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema(
  {
    movieTitle: { type: String, default: "" },
    movieName: { type: String, default: "" },
    originalName: { type: String, default: "" },
    genreId: {
      type: String,
      default: `${Schema.Types.ObjectId}`,
      ref: "Genre",
    },
    releaseDate: { type: Date || null, default: null },
    firstAirDate: { type: Date || null, default: null },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date || null, default: null },
    countries: [
      {
        countryName: { type: String, default: "" },
        countryId: {
          type: String,
          default: `${Schema.Types.ObjectId}`,
          ref: "Country",
        },
      },
    ],
    originalLanguage: { type: String, default: "" },
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
    overview: { type: String, default: "" },
    popularity: { type: Number, default: 0 },
    voteAverage: { type: Number, default: 0 },
    voteCount: { type: Number, default: 0 },
    video: { type: String, default: "" },
    trailer: { type: String, default: "" },
    isMovieAvailable: { type: Boolean, default: false },
    genre: { type: String, default: "" },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
