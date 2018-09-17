import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishPreviewComponent } from './dish-preview.component';
import {Dish} from '../models/dish.model';

describe('DishPreviewComponent', () => {
  let component: DishPreviewComponent;
  let fixture: ComponentFixture<DishPreviewComponent>;
  let expectedDishes;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishPreviewComponent);
    expectedDishes = new Array<Dish>();
    component = fixture.componentInstance;
    component.orderedDishes = expectedDishes;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
