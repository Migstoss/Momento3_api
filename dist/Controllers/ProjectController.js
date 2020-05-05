'use strict';

var _ProjectModel = require('../Models/ProjectModel');

var _ProjectModel2 = _interopRequireDefault(_ProjectModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    addSession: async function addSession(req, res) {
        var _req$body = req.body,
            name = _req$body.name,
            surname = _req$body.surname,
            identification = _req$body.identification,
            birthdate = _req$body.birthdate,
            city = _req$body.city,
            district = _req$body.district,
            cellphone = _req$body.cellphone;

        var newSession = new _ProjectModel2.default({ name: name, surname: surname, identification: identification, birthdate: birthdate, city: city, district: district, cellphone: cellphone });
        res.setHeader('Access-Control-Allow-Origin', '*');
        await newSession.save();
        return res.status(200).json({
            response: "Session added successfully"
        });
    },
    getSession: async function getSession(req, res) {
        var id = req.query.id;
        //console.log(name);
        var session = await _ProjectModel2.default.findById({ _id: id });
        return res.status(200).json({ session: session });
    },
    listSession: async function listSession(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        var sessions = await _ProjectModel2.default.find({});
        return res.status(200).json({ sessions: sessions });
    },
    updateSession: async function updateSession(req, res) {
        var _req$body2 = req.body,
            id = _req$body2.id,
            name = _req$body2.name,
            surname = _req$body2.surname,
            identification = _req$body2.identification,
            birthdate = _req$body2.birthdate,
            city = _req$body2.city,
            district = _req$body2.district,
            cellphone = _req$body2.cellphone;

        await _ProjectModel2.default.findByIdAndUpdate(id, { name: name, surname: surname, identification: identification, birthdate: birthdate, city: city, district: district, cellphone: cellphone });
        return res.status(200).json({
            response: "Session updated successfully"
        });
    },
    deleteSession: async function deleteSession(req, res) {
        var id = req.body.id;

        await _ProjectModel2.default.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Session deleted successfully"
        });
    }
}; //import Task from '../Models/ProjectModel';


module.exports = controller;