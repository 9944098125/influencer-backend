require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const studentsRoute = require("./routes/students");
const teachersRoute = require("./routes/teachers");
// const marksRoute = require("./routes/marks");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));

async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB is connected now !");
	} catch (err) {
		throw err;
	}
}

mongoose.connection.on("connected", () => {
	console.log("MongoDB connecting .... ... ...");
});
mongoose.connection.on("disconnected", () => {
	console.log("Database Disconnected !");
});

app.use("/api/students", studentsRoute);
app.use("/api/teachers", teachersRoute);
// app.use("/api/marks", marksRoute);

app.use((req, res, err, next) => {
	const errStatus = err.status || 403;
	const errMessage = err.message;
	return res.status(errStatus).json({
		success: false,
		stack: err.stack,
		message: errMessage,
	});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	connect();
	console.log(`App is now running on port ${port}`);
});
