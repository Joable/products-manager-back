const mongoose = require("../config/mongodb");

const productsSchema = mongoose.Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model("products", productsSchema);