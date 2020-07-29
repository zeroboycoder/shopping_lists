const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    path = require("path"),
    config = require("config")

// Config the server
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Route
const routes = require("./routes/api/routes");
const authRoute = require("./routes/api/auth");
const userRoute = require("./routes/api/user");
app.use(routes)
app.use(authRoute)
app.use(userRoute)

// Configure For Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    app.get("*", (req, res, next) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

// Connect the DB
// const db_uri = require("./config/db_config").MONGO_URI;
const db_uri = config.get("MONGO_LOCAL_URI");
const options = {
    useNewUrlParser: true,
    createIndexes :true,
    useUnifiedTopology: true,
}
const PORT = process.env.PORT || "5000";
mongoose.connect(db_uri, options)
    .then(connect => {
        app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
    })
    .catch(err => console.log("Can't connect to DB"))