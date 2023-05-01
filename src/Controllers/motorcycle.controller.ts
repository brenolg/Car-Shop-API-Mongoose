import { Request, Response } from 'express';
import MotorcycleService from '../Services/motorcycle.service';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const newMotorcycle = await this.service.create(motorcycle);
    return this.res.status(201).json(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycles = await this.service.findAll();

    return this.res.status(200).json(allMotorcycles);
  }

  public async findById() {
    const { id } = this.req.params;

    const motorcycle = await this.service.findById(id);
    return this.res.status(200).json(motorcycle);
  }

  public async updateById() {
    const { id } = this.req.params;
    const motorcycleData = { ...this.req.body };
    
    const updatedMotorcycle = await this.service.updateById(id, motorcycleData);

    return this.res.status(200).json(updatedMotorcycle);
  }
}
