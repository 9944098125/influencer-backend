const Teachers = require("../models/Teachers");

const create = async (req, res, next) => {
	const { name, classesManaging, subject } = req.body;
	try {
		const newTeacher = new Teachers({
			name,
			classesManaging,
			subject,
		});
		await newTeacher.save();
		res.status(200).json({ message: "Teacher Created Successfully" });
	} catch (err) {
		next(err);
	}
};

const read = async (req, res, next) => {
	try {
		const teachers = await Teachers.find();
		res.status(200).json({ message: "Found the Teachers", teachers: teachers });
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	const { teacherId } = req.params;
	try {
		const updatedTeacher = await Teachers.findByIdAndUpdate(
			teacherId,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json({
			message: "Updated the teacher successfully",
			teacher: updatedTeacher,
		});
	} catch (err) {
		next(err);
	}
};

const deleteOne = async (req, res, next) => {
	const { teacherId } = req.params;
	try {
		await Teachers.findByIdAndDelete(teacherId);
		res.status(200).json({ message: "Deleted the teacher successfully..." });
	} catch (err) {
		next(err);
	}
};

module.exports = { create, read, update, deleteOne };
