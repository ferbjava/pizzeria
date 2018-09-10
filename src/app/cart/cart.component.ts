import { Component, OnInit} from '@angular/core';
import { DishesService} from '../dishes/dishes.service';
import { Dish} from '../models/dish.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  dishesInCart: Dish[] = [];

  constructor(
    private service: DishesService,
  ) { }

  ngOnInit() {
    this.dishesInCart = this.service.getDishesFromCart();
  }

}
