import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailsComponent } from './dish-details.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Dish} from '../models/dish.model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('DishDetailsComponent', () => {
  let component: DishDetailsComponent;
  let fixture: ComponentFixture<DishDetailsComponent>;
  let expectedDish;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ DishDetailsComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailsComponent);
    expectedDish = new Dish();
    component = fixture.componentInstance;
    component.dish = expectedDish;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
