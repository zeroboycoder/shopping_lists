const express = require("express");
const route = express.Router()

const controller = require("../controllers/controllers");

route.get("/api/items", controller.fetchItems)

route.post("/api/items/add", controller.addItems)

route.delete("/api/items/delete/:itemId", controller.removeItem)

module.exports = route;