const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	standard: {
		type: String,
		required: true,
	},
	marks: {
		type: String,
		required: true,
	},
});

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;
