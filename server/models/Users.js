const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String, 
        required: true
    }
})

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String, 
        required: true
    }
})

const UserModel = mongoose.model("users", UserSchema);
const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = UserModel;
module.exports = MovieModel;