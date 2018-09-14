import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order.model';
import {Observable} from 'rxjs';
import {DeliveryData} from '../models/deliveryData.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersUrl = 'api/orders';
  private deliveryUrl = 'api/delivery';

  constructor(
    private readonly http: HttpClient,
    ) {}

  loadAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.ordersUrl}/${order.id}`, order);
  }

  saveDeliveryData(data: DeliveryData): Observable<DeliveryData> {
    return this.http.post<DeliveryData>(this.deliveryUrl, data);
  }
}
