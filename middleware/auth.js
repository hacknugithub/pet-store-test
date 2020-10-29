const jwt = require("jsonwebtoken");
const models = require("../models");

/**
 * @desciption Authenticate request middleware to verify token and request
 * @param {*} req HTTP object that must contain res.headers with an Authorization: Bearer <token>
 * @param {*} res HTTP response object
 * @param {*} next Function that will be executed after the validation has ended successfully
 * @return {*}
 */
exports.authenticateRequest = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      success: false,
      code: 403,
      error: "Your header is missing authorization",
    });
  }
  try {
    let token = req.headers.authorization.split(" ")[1];
    const verify = await jwt.verify(token, process.env.TOP_SECRET);
    if (verify) {
      const decoded = await jwt.decode(token, process.env.TOP_SECRET);
      console.log(decoded);
      const found_user = await models.User.findOne({
        where: { id: decoded.payload },
      });
      if (found_user) {
        next();
      } else {
        return res.status(404).json({
          success: false,
          code: 404,
          error: "Seems that you are not authorized to do that",
        });
      }
    } else {
      throw "Token invalid or expired";
    }
  } catch (error) {
    return res.status(403).json({
      success: false,
      code: 403,
      error: error,
    });
  }
};
