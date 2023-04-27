import { Router } from 'express';
import CarController from '../Controllers/car.controller';
import resolver from '../Utils/resolver';

const promiseRouter = Router();
const carRouter = resolver(promiseRouter); 

promiseRouter.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

export default carRouter;