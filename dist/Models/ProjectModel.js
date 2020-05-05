"use strict";

var _mongoose = require("mongoose");

//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

var SessionSchema = new _mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    identification: { type: String },
    birthdate: { type: String },
    city: { type: String },
    district: { type: String },
    cellphone: { type: String }
});

module.exports = (0, _mongoose.model)("Session", SessionSchema);