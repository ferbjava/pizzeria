import { Component, OnInit} from '@angular/core';
import { DishesService} from '../dishes/dishes.service';
import { Dish} from '../models/dish.model';
import { Location} from '@angular/common';

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
    private location: Location
  ) { }

  ngOnInit() {
    this.dishesInCart = this.service.getDishesFromCart();
    this.calculateTotalPrice();
  }

  goBack(): void {
    this.location.back();
  }

  removeFromCart(dish: Dish) {
    this.service.removeFromCart(dish);
    this.calculateTotalPrice();
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.dishesInCart.reduce((a, b) => +a + +b.price, 0);
  }
}
