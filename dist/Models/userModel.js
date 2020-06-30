"use strict";

var _mongoose = require("mongoose");

//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

var UserSchema = new _mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String
});

module.exports = (0, _mongoose.model)("User", UserSchema);