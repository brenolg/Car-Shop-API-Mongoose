import { Model, Schema, models, model } from 'mongoose';

export default abstract class CarsODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(type: string, schema: Schema) {
    this.schema = schema;
    this.model = models[type] || model(type, schema);
  }

  public async create(vehicle: T): Promise<T | null> {
    return this.model.create({ ...vehicle });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async updateById(id: string, vehicleData : Partial< T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, vehicleData, { new: true });
  }
}
