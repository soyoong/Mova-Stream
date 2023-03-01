const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: { type: String, default: "", unique: true },
});

module.exports = mongoose.model("Genre", genreSchema);
