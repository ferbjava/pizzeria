import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ OrderFormComponent ],
      providers: [ HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
