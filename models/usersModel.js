const mongoose = require("../config/mongodb");

const usersSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Email required']
    },
    password: {
        type: String,
        required: [true, 'Email required']
    }
});

module.exports = mongoose.model("users", usersSchema);