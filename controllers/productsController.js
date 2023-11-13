const productModel = require("../models/productsModel");

module.exports = {
    getAll: async function(req, res, next) {
        try{
            const documents = await productModel.find();

            res.status(200).json(documents);
        }catch(e){
            next(e);
        };
    },
    getById: async function(req, res, next) {
        try{
            const documents = await productModel.find({_id: req.params.id});

            res.status(200).json(documents);
        }catch(e){
            next(e);
        };
    },
    create: async function(req, res, next) {
        try{
            const document = new productModel({
                name: req.body.name,
                price: req.body.price,
            });
            
            const product = await document.save();

            res.status(201).json(product);
        }catch(e){
            next(e);
        };        
    },
    update: async function(req, res, next) {
        try{
            const update = await productModel.updateOne({_id: req.params.id}, req.body)

            res.status(200).json(update);
        }catch(e){
            next(e);
        };
    },
    delete: async function(req, res, next) {
        try{
            const deleteDocument = await productModel.deleteOne({_id: req.params.id}, req.body);

            res.status(200).json(deleteDocument);
        }catch(e){
            next(e);
        }
    }
}