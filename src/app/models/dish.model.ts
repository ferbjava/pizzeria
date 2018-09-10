import {DishesTypes} from './dishes-types';

export interface Dish {
  id: number;
  name: string;
  description: string;
  isAvailable: boolean;
  type: DishesTypes;
  price: number;
}
