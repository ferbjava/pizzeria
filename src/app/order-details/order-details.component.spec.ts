import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsComponent } from './order-details.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Order} from '../models/order.model';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let expectedOrder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsComponent],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    expectedOrder = new Order();
    component = fixture.componentInstance;
    component.order = expectedOrder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
