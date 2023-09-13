// test/RegisterController.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('RegisterController', () => {
  it('should register a new drone', async () => {
    const res = await chai.request(app).post('/register').send({
      id: '1',
      serialNumber: '123456789',
      model: 'Lightweight',
      weightLimit: 500,
      batteryCapacity: 100,
      state: 'IDLE',
    });

    expect(res).to.have.status(200);
    expect(res.body.message).to.equal('Drone registered successfully');
  });
});
