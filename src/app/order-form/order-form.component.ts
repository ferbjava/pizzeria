import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DishesService } from '../dishes/dishes.service';
import { Dish } from '../models/dish.model';
import { Order } from '../models/order.model';
import { ClientData} from '../models/clientData.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  orderedDishes: Dish[] = [];
  dishesId: number[] = [];
  recentOrder = new Order();

  clData: ClientData;
  clientData = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    localNumber: new FormControl('', Validators.required),
    flatNumber: new FormControl('', Validators.required)
  });

  constructor(
    private readonly service: DishesService,
  ) { }

  ngOnInit() {
    this.loadDishesFromCart();
  }

  loadDishesFromCart() {
    this.orderedDishes = this.service.getDishesFromCart();
    this.convertDishesToId(this.orderedDishes);
  }

  onSubmit() {
    this.recentOrder.dishIds = this.dishesId;
    this.service.saveOrder(this.recentOrder);
    // this.clData = this.clientData.value;
    this.orderedDishes = [];
    this.dishesId = [];
    this.clientData.reset();
  }

  private convertDishesToId(dishes: Dish[]) {
    for (let i = 0; i < dishes.length; i++) {
      this.dishesId[i] = dishes[i].id;
    }
  }
}


