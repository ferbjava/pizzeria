import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DishesService} from '../services/dishes.service';
import {Dish} from '../models/dish.model';
import {Order} from '../models/order.model';
import {OrdersService} from '../services/orders.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {OrderStatus} from '../enums/order-status';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  orderedDishes: Dish[] = [];
  dishesId: number[] = [];
  rawOrder = new Order();
  savedOrder = new Order();
  isConfirmed: boolean;

  // clData: ClientData;
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
    private readonly dishService: DishesService,
    private readonly orderService: OrdersService
  ) { }

  ngOnInit() {
    this.loadDishesFromCart();
    this.isConfirmed = false;
  }

  loadDishesFromCart() {
    this.orderedDishes = this.dishService.getDishesFromCart();
    this.dishesId = this.convertDishesToId(this.orderedDishes);
}

  saveOrder() {
    this.rawOrder.dishIds = this.dishesId;
    this.rawOrder.orderStatus = OrderStatus.ACCEPTED;
    this.orderService.saveOrder(this.rawOrder)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.savedOrder = res);
    // this.clData = this.clientData.value;
    this.orderedDishes = [];
    this.dishesId = [];
    this.clientData.reset();
    this.isConfirmed = true;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // private methods
  private convertDishesToId(dishes: Dish[]): number[] {
    let ids: number[];
    ids = [];
    for (let i = 0; i < dishes.length; i++) {
      ids.push(dishes[i].id);
    }
    return ids;
  }
}
