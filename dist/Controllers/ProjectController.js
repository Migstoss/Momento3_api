'use strict';

var _propertyModel = require('../Models/propertyModel');

var _propertyModel2 = _interopRequireDefault(_propertyModel);

var _userModel = require('../Models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    addProperty: async function addProperty(req, res) {
        var _req$body = req.body,
            title = _req$body.title,
            type = _req$body.type,
            address = _req$body.address,
            rooms = _req$body.rooms,
            price = _req$body.price,
            area = _req$body.area;

        var newProperty = new _propertyModel2.default({ title: title, type: type, address: address, rooms: rooms, price: price, area: area });
        res.setHeader('Access-Control-Allow-Origin', '*');
        await newProperty.save();
        return res.status(200).json({
            response: "Property added successfully"
        });
    },
    getProperty: async function getProperty(req, res) {
        var id = req.query.id;
        //console.log(name);
        var property = await _propertyModel2.default.findById({ _id: id });
        return res.status(200).json({ property: property });
    },
    listProperty: async function listProperty(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var properties = await _propertyModel2.default.find({});
        return res.status(200).json({ properties: properties });
    },
    updateProperty: async function updateProperty(req, res) {
        var _req$body2 = req.body,
            id = _req$body2.id,
            title = _req$body2.title,
            type = _req$body2.type,
            address = _req$body2.address,
            rooms = _req$body2.rooms,
            price = _req$body2.price,
            area = _req$body2.area;

        await _propertyModel2.default.findByIdAndUpdate(id, { title: title, type: type, address: address, rooms: rooms, price: price, area: area });
        return res.status(200).json({
            response: "Property updated successfully"
        });
    },
    deleteProperty: async function deleteProperty(req, res) {
        var id = req.body.id;

        await _propertyModel2.default.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Property deleted successfully"
        });
    },
    addUser: async function addUser(req, res) {
        var _req$body3 = req.body,
            name = _req$body3.name,
            surname = _req$body3.surname,
            email = _req$body3.email,
            password = _req$body3.password;

        var newUser = new _userModel2.default({ name: name, surname: surname, email: email, password: password });
        res.setHeader('Access-Control-Allow-Origin', '*');
        await newUser.save();
        return res.status(200).json({
            response: "User added successfully"
        });
    },
    getUser: async function getUser(req, res) {
        var _req$body4 = req.body,
            email = _req$body4.email,
            password = _req$body4.password;

        var user = await _userModel2.default.find({ email: email, password: password });
        return res.status(200).json({ user: user });
    }
};

module.exports = controller;