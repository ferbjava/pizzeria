import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {OrdersService} from '../services/orders.service';
import {OrderStatus} from '../enums/order-status';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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

  constructor(
    private readonly orderService: OrdersService
  ) {
    this.keys = Object.keys(this.statuses).filter(String);
    }

  ngOnInit() {
  }

  ngOnChanges() {
    this.recentStatus.setValue(this.order.orderStatus);
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
