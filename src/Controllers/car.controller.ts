import { Request, Response } from 'express';
import CarService from '../Services/car.service';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const newCar = await this.service.create(car);
    return this.res.status(201).json(newCar);
  }

  public async findAll() {
    const allCars = await this.service.findAll();

    return this.res.status(200).json(allCars);
  }

  public async findById() {
    const { id } = this.req.params;

    const car = await this.service.findById(id);
    return this.res.status(200).json(car);
  }

  public async updateById() {
    const { id } = this.req.params;
    const carData = { ...this.req.body };
    
    const updatedCar = await this.service.updateById(id, carData);

    return this.res.status(200).json(updatedCar);
  }
}
