const express = require('express');
const DroneService = require('./service/DroneService');
const RegisterController = require('./RegisterController');
const LoadController = require('./LoadController');
const LoadedController = require('./LoadedController');
const BatteryController = require('./BatteryController');

const app = express();
app.use(express.json());

const droneService = new DroneService();

const registerController = new RegisterController(droneService);
const loadController = new LoadController(droneService);
const loadedController = new LoadedController(droneService);
const batteryController = new BatteryController(droneService);

app.post('/register', registerController.registerDrone.bind(registerController));
app.post('/load/:droneId', loadController.loadMedication.bind(loadController));
app.get('/loaded/:droneId', loadedController.getLoadedMedication.bind(loadedController));
app.get('/battery/:droneId', batteryController.getBatteryLevel.bind(batteryController));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});