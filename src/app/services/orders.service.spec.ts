import { TestBed, inject } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));
});
