import ICar from '../../src/Interfaces/ICar';
import Car from '../../src/Domains/Car';

const carBody : ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carList : ICar[] = [
  {
    id: '6455872c4c9165ea452921ba',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '64558fa94c9165ea452921bd',
    model: 'Corsa',
    year: 2002,
    color: 'Green',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const id = '6455872c4c9165ea452921ba';

const carResponse = new Car({ id: '6455872c4c9165ea452921ba', ...carBody });

export { carBody, carList, id, carResponse };