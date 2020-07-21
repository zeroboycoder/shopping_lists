const ListModel = require("../models/shopList");
const { json } = require("body-parser");

exports.fetchItems = (req, res, next) => {
    console.log("Fetch items")
    ListModel.find().sort({_id : -1})
        .then(items => res.json(items))
        .catch(item => res.json({ fetchItem: false }))
}

exports.addItems = (req, res, next) => {
    console.log("Add items")
    const {name} = req.body;
    new ListModel({
        name : name
    }).save()
    .then(item => res.json(item))
    .catch(err => {
        console.log(err);
        return res.json({success: false})
    })
}

exports.removeItem = (req, res, next) => {
    console.log("Delete items");
    const {itemId} = req.params;
    ListModel.findById(itemId)
    .then(item => item.remove()
        .then(() => res.json({success : true}))
        .catch(err => {
            console.log(err);
            return res.json({success : false})
        }))
    .catch(err => {
        console.log(err)
        return res.json({success : false})
    })
}