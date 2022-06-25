const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
      }
});

const AuthModel = new mongoose.model("users", authSchema);

module.exports = AuthModel;