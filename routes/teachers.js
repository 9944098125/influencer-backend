const { create, read, deleteOne, update } = require("../controllers/teachers");

const router = require("express").Router();

router.route("/create").post(create);

router.route("/").get(read);

router.route("/update/:teacherId").patch(update);

router.route("/delete/:teacherId").delete(deleteOne);

module.exports = router;
