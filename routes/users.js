const express = require("express");
const router = express.Router();

const { createUsers } = require("../api/users");

router.route("/").post(createUsers);

module.exports = router;
