const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	classesManaging: {
		type: String,
	},
	subject: {
		type: String,
		required: true,
	},
});

const Teachers = mongoose.model("Teachers", teachersSchema);

module.exports = Teachers;
