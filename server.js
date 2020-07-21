const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    path = require("path");

// Config the server
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Route
const routes = require("./routes/routes");
app.use(routes)

// Configure For Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    app.get("*", (req, res, next) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

// Connect the DB
const db_uri = require("./config/db_config").MONGO_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const PORT = process.env.PORT || "5000";
mongoose.connect(db_uri, options)
    .then(connect => {
        app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
    })
    .catch(err => console.log("Can't connect to DB"))