import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DishesComponent} from './dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {Dish} from '../models/dish.model';
import {DishesTypes} from '../enums/dishes-types';
import {of} from 'rxjs';
import {DishesService} from '../services/dishes.service';
import {inject} from '@angular/core';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let componentDe;
  let componentNe;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async(() => {
    const dishServiceMock = jasmine.createSpy('DishesService');
    TestBed.configureTestingModule({
      declarations: [ DishesComponent ],
      providers: [ HttpClient, HttpHandler, {provide: DishesService, use: dishServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
    componentNe = componentDe.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call "getDishesByType" method by click on the button', () => {
    // arrange
    const clickedButton = componentDe.query(By.css('#button01'));
    console.log(clickedButton);
    const getDishesByTypesSpy = spyOn(component, 'getDishesByType');

    // act
    clickedButton.triggerEventHandler('click');

    // assert
    expect(getDishesByTypesSpy).toHaveBeenCalled();
  });

  it('should call "addToCart" method by click on the button', () => {
    // arrange
    const testDishes = [{id: 1, isAvailable: true, name: '', description: '', price: 0, type: DishesTypes.PIZZA}];
    component.dishes = testDishes;
    fixture.detectChanges();

    const clickedButton01 = componentDe.query(By.css('#to-cart-1'));
    const addToCartSpy = spyOn(component, 'addToCart');

    // act
    clickedButton01.triggerEventHandler('click');

    // assert
    expect(addToCartSpy).toHaveBeenCalled();
  });
});
