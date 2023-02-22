const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  originalName: { type: String, default: "" },
  shortName: { type: String, default: "" },
});

module.exports = mongoose.model("Country", countrySchema);
