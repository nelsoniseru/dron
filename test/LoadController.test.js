// test/LoadController.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('LoadController', () => {
  it('should load medication onto a drone', async () => {
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

    // Load medication onto the drone
    const loadRes = await chai.request(app).post('/load/1').send({
      name: 'Medication 1',
      weight: 100,
      code: 'M123',
      image: 'medication.jpg',
    });

    expect(loadRes).to.have.status(200);
    expect(loadRes.body.message).to.equal('Medication loaded successfully');
  });
});
