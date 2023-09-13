// LoadedController.js
class LoadedController {
    constructor(droneService) {
      this.droneService = droneService;
    }
  
    getLoadedMedications(req, res) {
      const droneId = req.params.droneId;
      const drone = this.droneService.getDroneById(droneId);
  
      if (!drone) {
        return res.status(404).json({ message: 'Drone not found' });
      }
  
      if (drone.state !== 'LOADED' && drone.state !== 'DELIVERING') {
        return res.status(400).json({ message: 'Drone is not in a loaded state' });
      }
  
      // Retrieve and send loaded medications for the drone
      // ...
  
      res.status(200).json(medications);
    }
  }
  
  module.exports = LoadedController;