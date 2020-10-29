const models = require("../models");

/**
 * @api {post} /api/v1/users/
 * @apiName createUsers
 * @apiDescription Create a new User
 * @apiGroup User
 * @apiParam {String} name Required name of the user
 * @apiParam {String} password Required password
 * @apiParam {String} email Required valid email
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Garfield",
 *       "email": "garfield@cat.com",
 *       "password": "ilovelassagna"
 *     }
 *
 * @apiSuccess {String} token for making requests
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "token": "<token>",
 * }
 * @apiError {Error} Unexpected error.
 */

exports.createUsers = async (req, res, next) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const { name, email, password } = req.body;
    console.log(`creating user with name: ${name} email: ${email}`.blue);

    if (
      (name !== undefined || name !== "") &&
      (email !== undefined || email !== "") &&
      (password !== undefined || password !== "")
    ) {
      const user = await models.User.create({
        name: name,
        email: email,
        password: password,
      });

      console.log(user);
      // The creation of the token is managed by sequelize hook aterCreate
      let token = user.token;

      if (token) {
        // If everything is correct then you should have a token back
        return res.status(201).json({
          success: true,
          token: token,
        });
      } else {
        return res.status(500).json({
          success: false,
          code: 500,
          error: "Something went wrong with the creation of the token.",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        code: 400,
        error: "Name, email and password must be provided",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      code: 500,
      error: error.message,
    });
  }
};
