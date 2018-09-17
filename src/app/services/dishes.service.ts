import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Dish} from '../models/dish.model';
import { HttpClient} from '@angular/common/http';
import { DishesTypes} from '../enums/dishes-types';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private dishesInCart: Dish[] = [];
  private dishesUrl = 'api/dishes';

  constructor(
    private readonly http: HttpClient,
    ) {}

  getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.dishesUrl}`);
  }

  getDishesByType(type: DishesTypes): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.dishesUrl}/?type=${type}&&isAvailable=true`);
  }

  addDishToCart(dish: Dish): void {
    this.dishesInCart.push(dish);
    this.dishesInCart.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  getDishesFromCart(): Dish[] {
    return this.dishesInCart;
  }

  updateDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(`${this.dishesUrl}/${dish.id}`, dish);
  }

  removeFromCart(dish: Dish) {
    const index = this.dishesInCart.indexOf(dish);
    this.dishesInCart.splice(index, 1);
  }

  clearCart(): void {
    this.dishesInCart = [];
}

  calculateTotalPrice(): number {
    return this.dishesInCart.reduce((a, b) => +a + +b.price, 0);
  }
}
