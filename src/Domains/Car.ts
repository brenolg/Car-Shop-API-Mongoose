import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined; 
  protected model: string;
  protected year : number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
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
