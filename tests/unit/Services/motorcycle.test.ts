import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import { motorcycleBody, motorcycleList, id, motorcycleResponse } 
  from '../../Mocks/motorcycleMocks';

describe('Testando a rota Motorcycles', function () {
  afterEach(sinon.restore);
  describe('POST /motorcycles', function () {
    it('Quando a requisição é feita com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleResponse);
      const service = new MotorcycleService();
      const result = await service.create(motorcycleBody);
  
      expect(result).to.be.deep.equal(motorcycleResponse);
    });
  });

  describe('GET /motorcycles', function () {
    it('Quando a requisição é feita com sucesso deve retornar uma lista ', async function () {
      sinon.stub(Model, 'find').resolves(motorcycleList);
      const service = new MotorcycleService();
      const result = await service.findAll();
  
      expect(result).to.be.deep.equal(motorcycleList);
    });
  });

  describe('GET /motorcycles/id', function () {
    it('Caso o id informado não for encontrado', async function () {
      sinon.stub(Model, 'findById').resolves({});
      try {
        const service = new MotorcycleService();
        await service.findById('99');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  
    it('Quando a requisição é feita com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(motorcycleResponse);
      const service = new MotorcycleService();
      const result = await service.findById(id);
  
      expect(result).to.be.deep.equal(motorcycleResponse);
    });
  });
});
