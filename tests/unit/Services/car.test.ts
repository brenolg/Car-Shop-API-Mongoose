import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import CarService from '../../../src/Services/car.service';
import { carBody, carList, id, carResponse } from '../../Mocks/carMocks';

describe('Testando a rota /cars', function () {
  afterEach(sinon.restore);
  describe('POST /cars', function () {
    it('Quando a requisição é feita com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(carResponse);
      const service = new CarService();
      const result = await service.create(carBody);
  
      expect(result).to.be.deep.equal(carResponse);
    });
  });

  describe('GET /cars', function () {
    it('Quando a requisição é feita com sucesso deve retornar uma lista ', async function () {
      sinon.stub(Model, 'find').resolves(carList);
      const service = new CarService();
      const result = await service.findAll();
  
      expect(result).to.be.deep.equal(carList);
    });
  });

  describe('GET /cars/id', function () {
    it('Caso o id informado não for encontrado', async function () {
      sinon.stub(Model, 'findById').resolves({});
      try {
        const service = new CarService();
        await service.findById('99');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  
    it('Quando a requisição é feita com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(carResponse);
      const service = new CarService();
      const result = await service.findById(id);
  
      expect(result).to.be.deep.equal(carResponse);
    });
  });
});
