const mongoose = require("../config/mongodb");

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This field is requiered.'],
        minLength: [3, 'The name of the product must be at least 3 characters long.'],
        maxLength: [100, 'This field may not exceed 100 characters long.']
    },
    price: {
        type: Number,
        required: [true, 'This field is requiered.'],
        maxLength: [10, 'This field may not exceed 10 characters long.'],
        min: [0, 'The price value must be greater or equal to 0']
    },
    img: {
        type: String,
        required: [true, 'You must select an image.']
    },
    category: {
        type: String,
        required: [true, 'You must select a category.']
    }
});

productsSchema.virtual("price_currency").get(function(){
    return `${this.price} $`
})

productsSchema.set("toJSON", {virtuals: true});

module.exports = mongoose.model("products", productsSchema);