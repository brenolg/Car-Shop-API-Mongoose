import { expect } from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import {
  id,
  motorcycleBody,
  motorcycleList, motorcycleResponse,
} from '../../Mocks/motorcycleMocks';

const success = 'Quando a requisição é feita com sucesso';
const idNotFound = 'Caso o id informado não for encontrado'; 
describe('Testando a rota Motorcycles', function () {
  const service = new MotorcycleService();
  
  afterEach(sinon.restore);
  
  describe('POST /motorcycles', function () {
    it(success, async function () {
      sinon.stub(Model, 'create').resolves(motorcycleResponse);

      const result = await service.create(motorcycleBody);
  
      expect(result).to.be.deep.equal(motorcycleResponse);
    });
  });

  describe('GET /motorcycles', function () {
    it(success, async function () {
      sinon.stub(Model, 'find').resolves(motorcycleList);

      const result = await service.findAll();
  
      expect(result).to.be.deep.equal(motorcycleList);
    });
  });

  describe('GET /motorcycles/id', function () {
    it(idNotFound, async function () {
      sinon.stub(Model, 'findById').resolves({});
      
      try {
        await service.findById('99');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  
    it(success, async function () {
      sinon.stub(Model, 'findById').resolves(motorcycleResponse);

      const result = await service.findById(id);
  
      expect(result).to.be.deep.equal(motorcycleResponse);
    });
  });

  describe('PUT /cars', function () {
    it(idNotFound, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
    
      try {
        await service.updateById(id, motorcycleBody);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
    
    it(success, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleResponse);

      const result = await service.updateById(id, motorcycleBody);

      expect(result).to.deep.equal(motorcycleResponse);
    });
  });
});
