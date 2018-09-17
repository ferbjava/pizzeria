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
  rawOrder: Order;
  savedOrder: Order;
  isConfirmed: boolean;
  totalPrice: number;

  deliveryData: DeliveryData;

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
    this.totalPrice = this.dishService.calculateTotalPrice();
  }

  loadDishesFromCart() {
    this.orderedDishes = this.dishService.getDishesFromCart();
    this.dishesId = this.convertDishesToId(this.orderedDishes);
}

  saveOrder() {
    this.deliveryData = this.deliveryForm.value;
    this.deliveryData.date = this.deliveryForm.get('date').value;
    this.rawOrder = new Order(this.dishesId, OrderStatus.ACCEPTED, this.deliveryData);
    this.orderService.saveOrder(this.rawOrder)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.savedOrder = res);
    this.isConfirmed = true;
    this.clearCart();
  }

  getRecentDateAndTime(): string {
    const recentDate = new Date();
    const month = this.addZeroToShortString((recentDate.getMonth() + 1).toString());
    const day = this.addZeroToShortString(recentDate.getDate().toString());
    const hours = this.addZeroToShortString(recentDate.getHours().toString());
    const minutes = this.addZeroToShortString(recentDate.getMinutes().toString());
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

  private clearCart() {
    this.orderedDishes = [];
    this.dishesId = [];
    this.deliveryForm.reset();
    this.dishService.clearCart();
  }

  private addZeroToShortString(str: string): string {
    return str.length > 1 ? str : '0'.concat(str);
  }
}
