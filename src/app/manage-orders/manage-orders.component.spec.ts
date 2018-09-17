import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageOrdersComponent} from './manage-orders.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderDetailsComponent} from '../order-details/order-details.component';
import {OrderStatus} from '../enums/order-status';

describe('ManageOrdersComponent', () => {
  let component: ManageOrdersComponent;
  let fixture: ComponentFixture<ManageOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ManageOrdersComponent, OrderDetailsComponent, OrderStatus],
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
