import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {OrdersService} from '../services/orders.service';
import {OrderStatus} from '../enums/order-status';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Dish} from '../models/dish.model';
import {DishesService} from '../services/dishes.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnChanges, OnDestroy {

  private readonly destroy$ = new Subject();
  @Input() order: Order;
  keys: any[];
  statuses = OrderStatus;
  recentStatus = new FormControl('');
  orderedDishes = new Array<Dish>();

  constructor(
    private readonly orderService: OrdersService,
    private readonly dishesService: DishesService
  ) {
    this.keys = Object.keys(this.statuses).filter(String);
    }

  ngOnInit() {
  }

  ngOnChanges() {
    this.recentStatus.setValue(this.order.orderStatus);
    this.orderedDishes = [];
    for (let i = 1; i <= this.order.dishIds.length; i++) {
      this.dishesService.getDishById(this.order.dishIds[i - 1])
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => this.orderedDishes.push(res));
    }
    this.orderedDishes.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  updateOrder(): void {
    this.order.orderStatus = this.recentStatus.value;
    this.orderService.updateOrder(this.order)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.order = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
