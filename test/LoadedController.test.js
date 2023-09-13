// test/LoadedController.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('LoadedController', () => {
  it('should retrieve loaded medications from a drone', async () => {
    // Register a drone and load medication
    const registerRes = await chai.request(app).post('/register').send({
      id: '1',
      serialNumber: '123456789',
      model: 'Lightweight',
      weightLimit: 500,
      batteryCapacity: 100,
      state: 'IDLE',
    });

    expect(registerRes).to.have.status(200);

    const loadRes = await chai.request(app).post('/load/1').send({
      name: 'Medication 1',
      weight: 100,
      code: 'M123',
      image: 'medication.jpg',
    });

    expect(loadRes).to.have.status(200);

    // Retrieve loaded medications
    const loadedRes = await chai.request(app).get('/loaded/1');

    expect(loadedRes).to.have.status(200);
    expect(loadedRes.body).to.be.an('array');
    expect(loadedRes.body[0].name).to.equal('Medication 1');
  });
});
