import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';

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
}