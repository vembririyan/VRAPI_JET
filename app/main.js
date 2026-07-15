const express = require("express");
const validation = require("./token_validation.js");

const router = express.Router();
module.exports = {
  express: express,
  validation: validation,
  router: router,
  status_200: { status: 200, message: "Success!" },
  status_201: { status: 201, message: "Created!" },
  status_204: { status: 204, message: "No Content!" },
  status_401: { status: 401, message: "Unauthorize!" },
  status_403: { status: 403, message: "Forbidden Here!" },
  status_404: { status: 404, message: "Not Found" },
  status_500: { status: 500, message: "Something Went Wrong!" },
};
