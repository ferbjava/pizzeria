import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DishesService} from '../services/dishes.service';
import {Dish} from '../models/dish.model';
import {Order} from '../models/order.model';
import {OrdersService} from '../services/orders.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {OrderStatus} from '../enums/order-status';
import {DeliveryData} from '../models/deliveryData.model';

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

  deliveryData: DeliveryData;
  savedData: DeliveryData;

  deliveryForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    localNumber: new FormControl('', Validators.required),
    flatNumber: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
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
    this.rawOrder.deliveryData = this.deliveryForm.value;
    this.orderService.saveOrder(this.rawOrder)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.savedOrder = res);
    this.isConfirmed = true;
    // this.deliveryData = this.deliveryForm.value;
    // this.orderService.saveDeliveryData(this.deliveryData)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(res => this.savedData = res);
    this.clearDeliveryForm();
  }

  getRecentDateAndTime(): string {
    const recentDate = new Date();
    let month = recentDate.getMonth().toString();
    month = month.length > 1 ? month : '0'.concat(month);
    let day = recentDate.getDate().toString();
    day = day.length > 1 ? day : '0'.concat(day);
    let hours = recentDate.getHours().toString();
    hours = hours.length > 1 ? hours : '0'.concat(hours);
    let minutes = recentDate.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : '0'.concat(minutes);
    let dateString: string;
    dateString = recentDate.getFullYear().toString()
      .concat('-').concat(month)
      .concat('-').concat(day)
      .concat('T').concat(hours)
      .concat(':').concat(minutes);
    return dateString;
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

  private clearDeliveryForm() {
    this.orderedDishes = [];
    this.dishesId = [];
    this.deliveryForm.reset();
  }
}
