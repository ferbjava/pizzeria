import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailsComponent} from './order-details.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Order} from '../models/order.model';
import {OrderStatus} from '../enums/order-status';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DishPreviewComponent} from '../dish-preview/dish-preview.component';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let expectedOrder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [OrderDetailsComponent, DishPreviewComponent],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    expectedOrder = new Order([0], OrderStatus.ACCEPTED, {
      id: 0,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      city: '',
      street: '',
      flat: '',
      local: ' ',
      date: ''
    });
    component = fixture.componentInstance;
    component.order = expectedOrder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
