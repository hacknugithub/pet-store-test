const Pet = require("../models/Pet");

exports.listPets = async (req, res, next) => {
  try {
    const pets = await Pet.findAll();

    return res.status(200).json({
      success: true,
      count: pets.length,
      data: pets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      data: error.message,
    });
  }
};

exports.createPets = async (req, res, next) => {
  try {
    const { name, tag } = req.body;
    console.log(`creating pet with name: ${name} and tag: ${tag}`.blue);
    const pet = await Pet.create({
      name: name,
      tag: tag,
    });
    return res.status(201).json({
      success: true,
      data: pet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      data: error,
    });
  }
};

exports.showPetById = async (req, res, next) => {
  try {
    const pet_id = req.params.id;
    console.log(`Looking for pet with an id: ${pet_id}`.blue);
    const found_pet = await Pet.findOne({ where: { id: pet_id } });

    return res.status(201).json({
      success: true,
      data: found_pet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      data: error.message,
    });
  }
};
