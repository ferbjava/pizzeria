import { Component, OnInit} from '@angular/core';
import { DishesService} from '../services/dishes.service';
import { Dish} from '../models/dish.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  dishesInCart: Dish[] = [];
  totalPrice = 0;

  constructor(
    private service: DishesService,
  ) { }

  ngOnInit() {
    this.dishesInCart = this.service.getDishesFromCart();
    this.calculateTotalPrice();
  }

  removeFromCart(dish: Dish) {
    this.service.removeFromCart(dish);
    this.calculateTotalPrice();
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.dishesInCart.reduce((a, b) => +a + +b.price, 0);
  }
}
