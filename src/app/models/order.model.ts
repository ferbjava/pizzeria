import {OrderStatus} from '../enums/order-status';

export class Order {
  id: number;
  orderStatus: OrderStatus;
  dishIds: number[];

  constructor() {
    this.dishIds = [];
    this.orderStatus = OrderStatus.ACCEPTED;
  }
}
