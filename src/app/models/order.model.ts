import {OrderStatus} from '../enums/order-status';
import {DeliveryData} from './deliveryData.model';

export class Order {
  id: number;
  orderStatus: OrderStatus;
  dishIds: number[];
  deliveryData: DeliveryData;

  constructor() {
    this.dishIds = [];
  }
}
