const { create, read, update, deleteOne } = require("../controllers/students");

const router = require("express").Router();

router.route("/create").post(create);

router.route("/").get(read);

router.route("/update/:studentId").patch(update);

router.route("/delete/:studentId").delete(deleteOne);

module.exports = router;
