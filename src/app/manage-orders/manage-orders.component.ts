import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from '../services/orders.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Order} from '../models/order.model';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  isTableVisible = true;
  isOrderDetailsVisible = false;
  allOrders: Order[];
  selectedOrder: Order;

  constructor(
    private readonly orderService: OrdersService,
  ) {}

  ngOnInit() {
    this.loadOrders();
    this.selectedOrder = new Order();
  }

  loadOrders() {
    this.orderService.loadAllOrders()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.allOrders = res);
  }

  showOrderDetails(id: number) {
    this.isTableVisible = false;
    this.isOrderDetailsVisible = true;
    this.selectedOrder = this.allOrders[id - 1];
  }

  showAllOrders() {
    this.isTableVisible = true;
    this.isOrderDetailsVisible = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
