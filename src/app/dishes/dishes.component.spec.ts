import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesComponent} from './dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {DishesTypes} from '../models/dishes-types';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesComponent ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run "DishesComponent.getDish" method', () => {
    // arrange
    const someType: DishesTypes = DishesTypes.DRINK;
    const getDishesByTypesSpy = spyOn(component, 'getDishesByType');

    // act
    component.getDishesByType(someType);

    // assert
    expect(getDishesByTypesSpy).toHaveBeenCalled();
  });
});
