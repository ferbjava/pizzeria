import {Component, OnInit, OnDestroy} from '@angular/core';
import {DishesService} from '../services/dishes.service';
import {Dish} from '../models/dish.model';
import {DishesTypes} from '../models/dishes-types';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  dishes: Dish[];
  typePizza: DishesTypes = DishesTypes.PIZZA;
  typeSpaghetti: DishesTypes = DishesTypes.SPAGHETTI;
  typeDrink: DishesTypes = DishesTypes.DRINK;

  constructor(
    private readonly service: DishesService,
  ) {}

  ngOnInit(): void {
    // this.loadDishes();
  }

  private loadDishes() {
    this.service.getDishes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.dishes = res);
  }

  getDishesByType(type: DishesTypes) {
    this.service.getDishesByType(type)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.dishes = res);
  }

  addToCart(dish: Dish) {
    this.service.addDishToCart(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
