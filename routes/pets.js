const express = require("express");
const router = express.Router();

const { getPets, addPet, getPet } = require("../api/pets");

router.route("/").get(getPets).post(addPet);

router.route(":/id").get(getPet);

module.exports = router;
