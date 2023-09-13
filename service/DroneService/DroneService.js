class DroneService {
    constructor() {
      this.drones = [];
      this.medication = [];
    }
  
    registerDrone(drone) {
      this.drones.push(drone);
    }
  
    loadMedication(droneId, medicationItem) {
      const drone = this.drones.find((d) => d.id === droneId);
      if (!drone) throw new Error('Drone not found');
  
      if (medicationItem.weight > drone.weightLimit) {
        throw new Error('Medication weight exceeds drone limit');
      }
  
      if (drone.batteryCapacity < 25) {
        throw new Error('Drone battery level is below 25%');
      }
  
      drone.state = 'LOADING';
      this.medication.push({ ...medicationItem, droneId });
    }
  
    getLoadedMedication(droneId) {
      const drone = this.drones.find((d) => d.id === droneId);
      if (!drone) throw new Error('Drone not found');
  
      if (drone.state !== 'LOADED' && drone.state !== 'DELIVERING') {
        throw new Error('Drone is not in a loaded state');
      }
  
      return this.medication.filter((m) => m.droneId === droneId);
    }
  
    checkAvailableDronesForLoading() {
      return this.drones.filter((d) => d.state === 'IDLE');
    }
  
    checkDroneBatteryLevel(droneId) {
      const drone = this.drones.find((d) => d.id === droneId);0
      if (!drone) throw new Error('Drone not found');
  
      return drone.batteryCapacity;
    }
  }
  
  module.exports = DroneService;