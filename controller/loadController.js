class LoadController {
    constructor(droneService) {
      this.droneService = droneService;
    }
  
    loadMedication(req, res) {
      const { droneId } = req.params;
      const medicationItem = req.body;
  
      try {
        this.droneService.loadMedication(droneId, medicationItem);
        res.status(200).json({ message: 'Medication loaded successfully' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  }
  
  module.exports = LoadController;