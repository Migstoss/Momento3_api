import express from 'express';
import controller from '../Controllers/ProjectController'

const router = express.Router();

router.get('/listSession', controller.listSession);
router.get('/getSession', controller.getSession);
router.post('/addSession', controller.addSession);
router.post('/deleteSession', controller.deleteSession);
router.post('/updateSession', controller.updateSession);
//router.get('/data', controller.data);

module.exports = router;