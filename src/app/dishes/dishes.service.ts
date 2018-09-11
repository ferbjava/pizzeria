import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Dish} from '../models/dish.model';
import { HttpClient} from '@angular/common/http';
import { DishesTypes} from '../models/dishes-types';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private dishesInCart: Dish[] = [];

  private dishesUrl = 'api/dishes';
  private ordersUrl = 'api/orders';

  constructor(
    private readonly http: HttpClient,
    ) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes');
  }

  getDishesByType(type: DishesTypes): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.dishesUrl}/?type=${type}`);
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

  removeFromCart(dish: Dish) {
    const index = this.dishesInCart.indexOf(dish);
    this.dishesInCart.splice(index, 1);
  }

  saveOrder(recentOrder: Order): void {
    this.http.post(this.ordersUrl, recentOrder).subscribe();
  }
}
