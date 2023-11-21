const usersModel = require("../models/usersModel");

module.exports = {
    getAll: async function(req, res, next) {
        try{
            const documents = await usersModel.find();

            res.status(200).json(documents);
        }catch(e){
            next(e);
        };
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