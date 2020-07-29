const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const User = require("../models/user");

exports.signUp = (req, res, next) => {
    console.log("Sign Up Route")
    const {username, email, password} = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        if(err) throw err
        bcrypt.hash(password, salt, (err, hashPassword) => {
            if(err) throw err;
            new User({
                username : username,
                email : email,
                password : hashPassword
            }).save()
            .then(user => {
                jwt.sign({_id : user._id}, config.get("jwtSecret"), {expiresIn : 3600}, (err, token) => {
                    if(err) throw err;
                    res.json({token, user : {username : user.username, email : user.email}})
                })
            })
        })
    })
}

exports.signIn = (req, res, next) => {
    console.log("Signin route")
    const { email, password } = req.body;

    User.findOne({email : email})
    .then(user => {
        if(!user) return res.status(400).json({msg : "User Doesn't Exist"})
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg : "Invaild Credentials"})

            jwt.sign({_id : user._id}, config.get("jwtSecret"), {expiresIn : 3600}, (err, token) => {
                if(err) throw err;
                return res.status(200).json({token, user : {username : user.username, email : user.email}})
            })
        })
        .catch(err => {})
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    })
}