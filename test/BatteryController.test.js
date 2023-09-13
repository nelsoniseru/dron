// test/BatteryController.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('BatteryController', () => {
  it('should check drone battery level', async () => {
    // Register a drone first
    const registerRes = await chai.request(app).post('/register').send({
      id: '1',
      serialNumber: '123456789',
      model: 'Lightweight',
      weightLimit: 500,
      batteryCapacity: 100,
      state: 'IDLE',
    });

    expect(registerRes).to.have.status(200);

    // Check drone battery level
    const batteryRes = await chai.request(app).get('/battery/1');

    expect(batteryRes).to.have.status(200);
    expect(batteryRes.body.batteryLevel).to.equal(100);
  });
});
