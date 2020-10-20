const Pet = require("../models/Pet");

/**
 * @api {get} /api/v1/pets/
 * @apiName listPets
 * @apiDescription Get a paged array of pets
 * @apiGroup User
 *
 * @apiParam {None}.
 *
 * @apiSuccess {Array} Paged array of pets.
 * @apiError {Error Model} Unexpected error.
 */
exports.listPets = async (req, res, next) => {
  try {
    const pets = await Pet.findAll();

    res.setHeader("Content-Type", "application/json");

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

/**
 * @api {post} /api/v1/pets/
 * @apiSampleRequest http://localhost:5000/api/v1/pets/
 * @apiName createPets
 * @apiDescription Create a new pet
 * @apiGroup User
 *
 * @apiParam {String} [name] Required name of the pet
 * @apiParam {String} [tag] Optional tag for the pet
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Garfield",
 *       "tag": "cats",
 *     }
 *
 * @apiSuccess {Null} Null response.
 * @apiError {Error Model} Unexpected error.
 */
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

/**
 * @api {get} /api/v1/pets/:id
 * @apiSampleRequest http://localhost:5000/api/v1/pets/1
 * @apiName showPetById
 * @apiDescription Information for an specific pet
 *
 * @apiParam {Integer} [id] Id for the pet you are looking
 *
 * @apiSuccess {Pet} A Pet data Model.
 * @apiError {Error} Unexpected error Model.
 */
exports.showPetById = async (req, res, next) => {
  try {
    const pet_id = req.params.id;
    console.log(`Looking for pet with an id: ${pet_id}`.blue);
    const found_pet = await Pet.findOne({ where: { id: pet_id } });

    return res.status(200).json({
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
