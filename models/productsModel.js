const mongoose = require("../config/mongodb");

const productsSchema = mongoose.Schema({
    name: String,
    price: String,
    img: String
});

module.exports = mongoose.model("products", productsSchema);