import { expect } from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarService from '../../../src/Services/car.service';
import { carBody, carList, carResponse, id } from '../../Mocks/carMocks';

const success = 'Quando a requisição é feita com sucesso';
const idNotFound = 'Caso o id informado não for encontrado'; 

describe('Testando a rota /cars', function () {
  const service = new CarService();
  afterEach(sinon.restore);
  describe('POST /cars', function () {
    it(success, async function () {
      sinon.stub(Model, 'create').resolves(carResponse);
  
      const result = await service.create(carBody);
  
      expect(result).to.be.deep.equal(carResponse);
    });
  });

  describe('GET /cars', function () {
    it(success, async function () {
      sinon.stub(Model, 'find').resolves(carList);

      const result = await service.findAll();
  
      expect(result).to.be.deep.equal(carList);
    });
  });

  describe('GET /cars/id', function () {
    it(idNotFound, async function () {
      sinon.stub(Model, 'findById').resolves({});
      
      try {
        await service.findById('99');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  
    it(success, async function () {
      sinon.stub(Model, 'findById').resolves(carResponse);

      const result = await service.findById(id);
  
      expect(result).to.be.deep.equal(carResponse);
    });
  });
  
  describe('PUT /cars', function () {
    it(idNotFound, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
    
      try {
        await service.updateById(id, carBody);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
    
    it(success, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carResponse);

      const result = await service.updateById(id, carBody);

      expect(result).to.deep.equal(carResponse);
    });
  });
});
