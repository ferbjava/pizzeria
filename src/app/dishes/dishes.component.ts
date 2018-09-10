import {Component, OnInit} from '@angular/core';
import {DishesService} from './dishes.service';
import {Dish} from '../models/dish.model';
import {DishesTypes} from '../models/dishes-types';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];
  typePizza: DishesTypes = DishesTypes.PIZZA;
  typeSpaghetti: DishesTypes = DishesTypes.SPAGHETTI;
  typeDrink: DishesTypes = DishesTypes.DRINK;
  // private readonly destroy$ = new Subject();

  constructor(
    private readonly service: DishesService,
  ) {}

  ngOnInit(): void {
    // this.loadDishes();
  }

  private loadDishes() {
    this.service.getDishes()
      // .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.dishes = res);
  }

  getDishesByType(type: DishesTypes) {
    this.service.getDishesByType(type)
      .subscribe(res => this.dishes = res);
  }

  addToCart(dish: Dish) {
    this.service.addDishToCart(dish);
  }
}
