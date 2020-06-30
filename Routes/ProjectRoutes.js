import express from 'express';
import controller from '../Controllers/ProjectController'

const router = express.Router();

router.get('/listProperty', controller.listProperty);
router.post('/getProperty', controller.getProperty);
router.post('/getUser', controller.getUser);
router.post('/addProperty', controller.addProperty);
router.post('/addUser', controller.addUser);
router.delete('/deleteProperty', controller.deleteProperty);
router.put('/updateProperty', controller.updateProperty);
//router.get('/data', controller.data);

module.exports = router;