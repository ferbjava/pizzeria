import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrdersComponent } from './manage-orders.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderStatus} from '../enums/order-status';

describe('ManageOrdersComponent', () => {
  let component: ManageOrdersComponent;
  let fixture: ComponentFixture<ManageOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ManageOrdersComponent, MockOrderDetailsComponent],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-order-details',
  template: ''
})
class MockOrderDetailsComponent {
  order = new Order([0], OrderStatus.ACCEPTED, {
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
}
