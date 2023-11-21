const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    getAll: async function(req, res, next) {
        try{
            const documents = await usersModel.find();

            res.status(200).json(documents);
        }catch(e){
            next(e);
        };
    },
    validate: async function(req, res, next) {
        try{
            const user = await usersModel.findOne({email: req.body.email});

            if(!user){
                res.json({message: "Email and/or password doesn't match."})
                
                return
            };

            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({userId: user._id}, "15987", {expiresIn: "5m"});

                res.json(token);
            }else{
                res.json({message:"Email and/or password doesn't match."})
            };

        }catch(e){
            next(e);
        }
    },
    create: async function(req, res, next) {
        try{
            const document = new usersModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            const product = await document.save();

            res.status(201).json(product);
        }catch(e){
            next(e);
        };
    }
}