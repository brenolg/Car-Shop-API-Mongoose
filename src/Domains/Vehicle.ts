import IVehicle from '../Interfaces/IVehicle';

export default class Car {
  protected id?: string | undefined; 
  protected model: string;
  protected year : number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(car: IVehicle) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
  }
}
