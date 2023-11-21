const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Email required']
    },
    password: {
        type: String,
        required: [true, 'Password required']
    }
});

usersSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);

    next();
})

module.exports = mongoose.model("users", usersSchema);