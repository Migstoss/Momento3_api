'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectController = require('../Controllers/ProjectController');

var _ProjectController2 = _interopRequireDefault(_ProjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/listProperty', _ProjectController2.default.listProperty);
router.post('/getProperty', _ProjectController2.default.getProperty);
router.post('/getUser', _ProjectController2.default.getUser);
router.post('/addProperty', _ProjectController2.default.addProperty);
router.post('/addUser', _ProjectController2.default.addUser);
router.delete('/deleteProperty', _ProjectController2.default.deleteProperty);
router.put('/updateProperty', _ProjectController2.default.updateProperty);
//router.get('/data', controller.data);

module.exports = router;