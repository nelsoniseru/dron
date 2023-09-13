class RegisterController {
    constructor(droneService) {
      this.droneService = droneService;
    }
  
    registerDrone(req, res) {
      const drone = req.body;
      this.droneService.registerDrone(drone);
      res.status(200).json({ message: 'Drone registered successfully' });
    }
  }
  
  module.exports = RegisterController;