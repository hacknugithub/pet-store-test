const Pet = require("../models/Pet");
const Error = require("../models/Error");
const Pets = require("../models/Pets");

/**
 * @api {get} /api/v1/pets/
 * @apiSampleRequest http://localhost:5000/api/v1/pets/?limit=100
 * @apiName listPets
 * @apiDescription Get a paged array of pets
 * @apiGroup Pet
 * @apiParam {Integer} [limit] Limit to 100 pets per page
 * @apiSuccess {Array} Paged array of pets
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "count": 2,
 *   "data": [
 *       {
 *           "id": 1,
 *           "name": "Garfield",
 *           "tag": "cats"
 *       },
 *       {
 *           "id": 2,
 *           "name": "Oddie",
 *           "tag": "dogs"
 *       }
 *   ]
 * }
 * @apiError {Error} Unexpected error
 */
exports.listPets = async (req, res, next) => {
  try {
    const { limit, offset } = req.params;
    const pets = await Pet.findAll({
      offset: offset != undefined ? 0 : offset,
      limit: limit,
    });
    res.setHeader("Content-Type", "application/json");

    if (pets.count > 100) {
      pets = {
        ...pets,
        nextPage: `http://localhost:5000/api/v1/pets/?offset=${offset}limit=100`,
      };
    }

    return res.status(200).json({
      success: true,
      count: pets.length,
      data: pets,
    });
  } catch (error) {
    let error_obj = new Error({ code: 500, message: error.message });
    return res.status(500).json({
      success: false,
      error: error_obj,
    });
  }
};

/**
 * @api {post} /api/v1/pets/
 * @apiSampleRequest http://localhost:5000/api/v1/pets/
 * @apiName createPets
 * @apiDescription Create a new pet
 * @apiGroup Pet
 * @apiParam {String} [name] Required name of the pet
 * @apiParam {String} [tag] Optional tag for the pet
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Garfield",
 *       "tag": "cats",
 *     }
 *
 * @apiSuccess {Null} Null response.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "data": {
 *     "id": 1,
 *     "name": "Oddie",
 *     "tag": "dogs"
 *  }
 * }
 * @apiError {Error} Unexpected error.
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
    let error_obj = new Error({ code: 500, message: error.message });
    return res.status(500).json({
      success: false,
      error: error_obj,
    });
  }
};

/**
 * @api {get} /api/v1/pets/:id
 * @apiSampleRequest http://localhost:5000/api/v1/pets/1
 * @apiName showPetById
 * @apiDescription Information for an specific pet
 * @apiGroup Pet
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
    let error_obj = new Error({ code: 500, message: error.message });
    return res.status(500).json({
      success: false,
      error: error_obj,
    });
  }
};
