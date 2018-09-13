import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {OrdersService} from '../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order: Order;

  constructor(
    private readonly orderService: OrdersService
  ) { }

  ngOnInit() {
  }

  updateOrder() {
    return null;
  }

}
