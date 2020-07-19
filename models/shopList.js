const mongoose = require("mongoose")

const shopLists = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("ShopLists", shopLists)