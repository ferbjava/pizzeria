import {OrderStatus} from '../enums/order-status';
import {DeliveryData} from './deliveryData.model';

export class Order {
  id: number;
  orderStatus: OrderStatus;
  dishIds: number[];
  deliveryData: DeliveryData;

  constructor(dishIds: number[], status: OrderStatus, data: DeliveryData) {
    this.dishIds = dishIds;
    this.orderStatus = status;
    this.deliveryData = data;
  }
}
