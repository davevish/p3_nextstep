const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
	name: { type: String, required: true },
	location: { type: String, required: true },
	checkpoint: { type: Number, required: true },
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;
