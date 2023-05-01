import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycle.controller';
import resolver from '../Utils/resolver';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  resolver((req, res) => new MotorcycleController(req, res).create()),
);

motorcycleRouter.get(
  '/',
  resolver((req, res) => new MotorcycleController(req, res).findAll()),
);

motorcycleRouter.get(
  '/:id',
  resolver((req, res) => new MotorcycleController(req, res).findById()),
);

motorcycleRouter.put(
  '/:id',
  resolver((req, res) => new MotorcycleController(req, res).updateById()),
);

export default motorcycleRouter;