const router = require('express').Router();
const dataController = require('../controller/controller');

router.get('/cpuInfo', dataController.cpuInfo);

router.get('/biosInfo', dataController.biosInfo);

router.get('/osInfo', dataController.osInfo);

router.get('/cpuCurrentSpeed', dataController.cpuCurrentSpeed);

router.get('/cpuTemperature', dataController.cpuTemperature);

router.get('/memoryInfo', dataController.memoryInfo);



module.exports = router;