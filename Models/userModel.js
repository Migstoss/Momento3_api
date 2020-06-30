import {Schema, model} from 'mongoose';
//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String
});

module.exports = model("User",UserSchema);