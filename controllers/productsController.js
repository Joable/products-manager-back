const productModel = require("../models/productsModel");

module.exports = {
    getAll: async function(req, res, next) {
        try{
            const documents = await productModel.find();

            res.json(documents);
        }catch(e){
            console.log(e);
        };
    },
    getById: async function(req, res, next) {
        try{
            const documents = await productModel.find({_id: req.params.id});

            res.json(documents);
        }catch(e){
            console.log(e);
        };
    },
    create: async function(req, res, next) {
        try{
            const document = new productModel({
                name: req.body.name,
                price: req.body.price,
            });
            
            const product = await document.save();

            res.json(product);
        }catch(e){
            console.log(e);
        };        
    },
    update: async function(req, res, next) {
        try{
            const update = await productModel.updateOne({_id: req.params.id}, req.body)

            res.json(update);
        }catch(e){
            console.log(e);
        };
    },
    delete: async function(req, res, next) {
        try{
            const deleteDocument = await productModel.deleteOne({_id: req.params.id}, req.body);

            res.json(deleteDocument);
        }catch(e){
            console.log(e);
        }
    }
}