import {Schema, model} from 'mongoose';
//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

const SessionSchema = new Schema({
    name: {type: String},
    surname: {type: String},
    identification: {type: String},
    birthdate: {type: String},
    city: {type: String},
    district: {type: String},
    cellphone: {type: String},
});

module.exports = model("Session",SessionSchema);