import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import ApiError from '../Utils/ApiError';

export default class MotorcycleService {
  private model: MotorcycleODM = new MotorcycleODM();

  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (!motorcycle) return null;

    return new Motorcycle(motorcycle);
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new ApiError(422, 'Invalid mongo id');
    const motorcycle = await this.model.findById(id);

    if (!motorcycle) throw new ApiError(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcycle as IMotorcycle);
  }

  public async findAll() {
    const motorcycles = await this.model.findAll();
    
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle as IMotorcycle));
  }

  public async updateById(id: string, motorcycleData: IMotorcycle) {
    if (!isValidObjectId(id)) throw new ApiError(422, 'Invalid mongo id');
    const motorcycle = await this.model.updateById(id, motorcycleData);

    if (!motorcycle) throw new ApiError(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcycle as IMotorcycle);
  }
}