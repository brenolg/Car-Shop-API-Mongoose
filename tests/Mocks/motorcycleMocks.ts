import IMotorcycle from '../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../src/Domains/Motorcycle';

const motorcycleBody : IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  
};

const motorcycleList : IMotorcycle[] = [
  {
    id: '645591a44c9165ea452921c1',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '64558fa94c9165ea452921bd',
    model: 'Bizz',
    year: 2002,
    color: 'Green',
    status: true,
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  },
];

const id = '645591a44c9165ea452921c1';

const motorcycleResponse = new Motorcycle({ id: '645591a44c9165ea452921c1', ...motorcycleBody });

export { motorcycleBody, motorcycleList, id, motorcycleResponse };