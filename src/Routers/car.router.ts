import { Router } from 'express';
import CarController from '../Controllers/car.controller';
import resolver from '../Utils/resolver';

const carRouter = Router();

carRouter.post(
  '/',
  resolver((req, res) => new CarController(req, res).create()),
);

carRouter.get(
  '/',
  resolver((req, res) => new CarController(req, res).findAll()),
);

carRouter.get(
  '/:id',
  resolver((req, res) => new CarController(req, res).findById()),
);

carRouter.put(
  '/:id',
  resolver((req, res) => new CarController(req, res).updateById()),
);

export default carRouter;