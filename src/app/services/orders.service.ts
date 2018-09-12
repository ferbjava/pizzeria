import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersUrl = 'api/orders';

  constructor(
    private readonly http: HttpClient,
    ) {}

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order);
  }
}
