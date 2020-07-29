const express = require("express");
const route = express.Router()

const controller = require("../../controllers/controllers");
const auth = require("../../middleware/auth").checkauth;

route.get("/api/items", auth, controller.fetchItems)

route.post("/api/items/add", auth, controller.addItems)

route.delete("/api/items/delete/:itemId", auth, controller.removeItem)

module.exports = route;