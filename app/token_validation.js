const jwt = require("jsonwebtoken");

function validation(req, res, next) {
  if (!["/sign-in", "/sign-up"].includes(req.path)) {
    try {
      isValidToken = jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.SECRET_JWT,
      );
      if (isValidToken) {
        next();
      }
    } catch (error) {
      res.status(401).send({ status: 401, message: "Unauthorized" });
    }
  } else {
    next();
  }
}

module.exports = validation;
