const Students = require("../models/Students");

const create = async (req, res, next) => {
	try {
		const { name, standard, marks } = req.body;
		const newStudent = new Students({
			name,
			standard,
			marks,
		});
		// console.log(newStudent);
		await newStudent.save();
		res.status(201).json({ message: "Student Created Successfully..." });
	} catch (err) {
		next(err);
	}
};

const read = async (req, res, next) => {
	try {
		const students = await Students.find();
		// console.log(students);
		res.status(200).json({ message: "Found the students", students: students });
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { studentId } = req.params;
		const updatedStudent = await Students.findByIdAndUpdate(
			studentId,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json({
			message: "Updated the Student Successfully...",
			student: updatedStudent,
		});
	} catch (err) {
		next(err);
	}
};

const deleteOne = async (req, res, next) => {
	const { studentId } = req.params;
	try {
		await Students.findByIdAndDelete(studentId);
		res.status(200).json({ message: "student Deleted Successfully..." });
	} catch (err) {
		next(err);
	}
};

module.exports = { create, read, update, deleteOne };
