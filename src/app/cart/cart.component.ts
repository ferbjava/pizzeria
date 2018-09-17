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
    this.totalPrice = this.service.calculateTotalPrice();
  }

  removeFromCart(dish: Dish) {
    this.service.removeFromCart(dish);
    this.totalPrice = this.service.calculateTotalPrice();
  }
}
