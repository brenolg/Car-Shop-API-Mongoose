import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ApiError from '../Utils/ApiError';

export default class CarService {
  private model: CarsODM = new CarsODM();

  public createCarDomain(car: ICar | null): Car | null {
    if (!car) return null;

    return new Car(car);
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createCarDomain(newCar);
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new ApiError(422, 'Invalid mongo id');
    const car = await this.model.findById(id);

    if (!car) throw new ApiError(404, 'Car not found');

    return this.createCarDomain(car as ICar);
  }

  public async findAll() {
    const cars = await this.model.findAll();
    
    return cars.map((car) => this.createCarDomain(car as ICar));
  }
}