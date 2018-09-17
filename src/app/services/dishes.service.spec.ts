import {inject, TestBed} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {DishesTypes} from '../enums/dishes-types';
import {Dish} from '../models/dish.model';

describe('DishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));

  it('should call method "getAllDishes"', inject([DishesService], (service: DishesService) => {
    // arrange
    const httpClient = TestBed.get(HttpClient);
    const getMethodSpy = spyOn(httpClient, 'get');

    // act
    service.getAllDishes();

    // assets
    expect(getMethodSpy).toHaveBeenCalled();
  }));

  it('should call method "getDishesByType"', inject([DishesService], (service: DishesService) => {
    // arrange
    const dishType = DishesTypes.PIZZA;
    const httpClient = TestBed.get(HttpClient);
    const getMethodSpy = spyOn(httpClient, 'get');

    // act
    service.getDishesByType(dishType);

    // assets
    expect(getMethodSpy).toHaveBeenCalled();
  }));

  it('should call method "updateDish"', inject([DishesService], (service: DishesService) => {
    // arrange
    const testDish = <Dish>{};
    const httpClient = TestBed.get(HttpClient);
    const putMethodSpy = spyOn(httpClient, 'put');

    // act
    service.updateDish(testDish);

    // assets
    expect(putMethodSpy).toHaveBeenCalled();
  }));

  it('should add Dish to cart', inject([DishesService], (service: DishesService) => {
    // arrange
    const testDish = <Dish>{};

    // act
    service.addDishToCart(testDish);

    // assets
    expect(service.getDishesFromCart().length).toBe(1);
  }));

  it('should remove Dish from cart', inject([DishesService], (service: DishesService) => {
    // arrange
    const testDish = <Dish>{};
    service.addDishToCart(testDish);

    // act
    service.removeFromCart(testDish);

    // assets
    expect(service.getDishesFromCart().length).toBe(0);
  }));

  it('should clear Cart', inject([DishesService], (service: DishesService) => {
    // arrange
    const testDish01 = <Dish>{};
    const testDish02 = <Dish>{};
    service.addDishToCart(testDish01);
    service.addDishToCart(testDish02);

    // act
    service.clearCart();

    // assets
    expect(service.getDishesFromCart().length).toBe(0);
  }));

  it('should calculate total price od dishes', inject([DishesService], (service: DishesService) => {
    // arrange
    const testDish01 = new Dish();
    testDish01.price = 10.0;
    const testDish02 = new Dish();
    testDish02.price = 20.0;

    // act
    service.addDishToCart(testDish01);
    service.addDishToCart(testDish02);

    // assets
    expect(service.calculateTotalPrice()).toBe(30.0);
  }));

});
