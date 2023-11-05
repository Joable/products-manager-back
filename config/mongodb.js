const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/manager')
.then(() => console.log("Connected"))
.catch(error => console.log(error))

module.exports = mongoose;