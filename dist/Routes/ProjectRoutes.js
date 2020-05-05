'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectController = require('../Controllers/ProjectController');

var _ProjectController2 = _interopRequireDefault(_ProjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/listSession', _ProjectController2.default.listSession);
router.get('/getSession', _ProjectController2.default.getSession);
router.post('/addSession', _ProjectController2.default.addSession);
router.post('/deleteSession', _ProjectController2.default.deleteSession);
router.post('/updateSession', _ProjectController2.default.updateSession);
//router.get('/data', controller.data);

module.exports = router;