const express = require("express");
const router = express.Router();

const { listPets, showPetById, createPets } = require("../api/pets");

router.route("/").get(listPets).post(createPets);

router.route("/:id").get(showPetById);

module.exports = router;
