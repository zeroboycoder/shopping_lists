const express = require("express");
const route = express.Router();

const authController = require("../../controllers/authController");

route.post("/api/auth/signup", authController.signUp)

route.post("/api/auth/signin", authController.signIn)

module.exports = route;