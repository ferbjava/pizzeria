import { DishesTypes } from './dishes-types';

export class Dish {
  id: number;
  name: string;
  description: string;
  isAvailable: boolean;
  type: DishesTypes;
  price: number;
}
