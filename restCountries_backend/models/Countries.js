const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const countrySchema = mongoose.Schema({ any: mongoose.Mixed }, { strict: false });

const CountryModel = mongoose.model("Country", countrySchema);

module.exports = { CountryModel };
