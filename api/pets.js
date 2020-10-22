const paginate = require("jw-paginate");
const models = require("../models");

/**
 * @api {get} /api/v1/pets/
 * @apiName listPets
 * @apiDescription Get a paged array of pets
 * @apiGroup Pet
 * @apiParam {Integer} page Page number you want to get
 * @apiSuccess {Array} Paged array of pets
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "data": [
 *       "pager": {
 *           "totalItems": 149,
 *           "currentPage": 1,
 *           "pageSize": 100,
 *           "totalPages": 2,
 *           "startPage": 1,
 *           "endPage": 2,
 *           "startIndex": 0,
 *           "endIndex": 99,
 *           "pages": [
 *               1,
 *               2
 *           ]
 *       },
 *       "pageOfPets": [
 *           {
 *               "id": 1,
 *               "name": "Garfield",
 *               "tag": "cats"
 *           },
 *           {
 *               "id": 2,
 *               "name": "Oddie",
 *               "tag": "dogs"
 *           },
 *           {
 *               "id": 3,
 *               "name": "Junius",
 *               "tag": "iguanas"
 *           },
 *           ...
 *   ]
 * }
 * @apiError {Error} Unexpected error
 */
exports.listPets = async (req, res, next) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const { page } = req.body;
    const pets = await models.Pet.findAll();

    const currentPage = +page || 1;
    const pageSize = 100;

    const pager = paginate(pets.length, currentPage, pageSize);
    const pageOfPets = pets.slice(pager.startIndex, pager.endIndex + 1);
    let pagedData = { pager, pageOfPets };

    return res.status(200).json({
      success: true,
      data: pagedData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      code: 500,
      error: error.message,
    });
  }
};

/**
 * @api {post} /api/v1/pets/
 * @apiName createPets
 * @apiDescription Create a new pet
 * @apiGroup Pet
 * @apiParam {String} name Required name of the pet
 * @apiParam {String} [tag] Optional tag for the pet
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Garfield",
 *       "tag": "cats",
 *     }
 *
 * @apiSuccess {Object} Pet Object containing fields id, name, tag.
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
    res.setHeader("Content-Type", "application/json");
    const { name, tag } = req.body;
    console.log(`creating pet with name: ${name} and tag: ${tag}`.blue);
    const pet = await models.Pet.create({
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
      code: 500,
      error: error.message,
    });
  }
};

/**
 * @api {get} /api/v1/pets/:id
 * @apiName showPetById
 * @apiDescription Information for an specific pet
 * @apiGroup Pet
 * @apiSuccess {Object} Pet Object containing fields id, name, tag.
 * @apiError {Error} Unexpected error Model.
 */
exports.showPetById = async (req, res, next) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const pet_id = +req.params.id;
    console.log(`Looking for pet with an id: ${pet_id}`.blue);
    const found_pet = await models.Pet.findOne({ where: { id: pet_id } });
    return res.status(200).json({
      success: true,
      data: found_pet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      code: 500,
      error: error.message,
    });
  }
};
