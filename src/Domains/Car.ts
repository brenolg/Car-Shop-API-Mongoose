import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  getDoorsQty(): number {
    return this.doorsQty;
  }
    
  setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }

  setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}
