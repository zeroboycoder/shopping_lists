const express = require("express");
const route = express.Router();

const userController = require("../../controllers/userController");
const authMiddleware = require("../../middleware/auth").checkauth;

route.get("/api/user", authMiddleware, userController.getUser);

module.exports = route;