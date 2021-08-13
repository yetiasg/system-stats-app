const router = require('express').Router();
const dataController = require('../controller/controller');

router.get('/cpuInfo', dataController.cpuInfo);

router.get('/cpuUsage', dataController.cpuUsage);

router.get('/biosInfo', dataController.biosInfo);

router.get('/osInfo', dataController.osInfo);

router.get('/system', dataController.system);

router.get('/baseboard', dataController.baseboard);

router.get('/cpuCurrentSpeed', dataController.cpuCurrentSpeed);

router.get('/cpuTemperature', dataController.cpuTemperature);

router.get('/memoryInfo', dataController.memoryInfo);

router.get('/memLayout', dataController.memLayout);

router.get('/graphics', dataController.graphics);


module.exports = router;