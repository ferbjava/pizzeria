import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishesService} from '../services/dishes.service';
import {Subject} from 'rxjs';
import {Dish} from '../models/dish.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-manage-dishes',
  templateUrl: './manage-dishes.component.html',
  styleUrls: ['./manage-dishes.component.scss']
})
export class ManageDishesComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  isTableVisible = true;
  isDishDetailsVisible = false;
  allDishes: Dish[];
  selectedDish: Dish;

  constructor(
    private readonly dishesService: DishesService
  ) {}

  ngOnInit() {
    this.loadDishes();
  }

  loadDishes() {
    this.dishesService.getAllDishes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.allDishes = res);
  }

  showDishDetails(id: number) {
    this.isTableVisible = false;
    this.isDishDetailsVisible = true;
    this.selectedDish = this.allDishes[id - 1];
  }

  showAllDishes() {
    this.isTableVisible = true;
    this.isDishDetailsVisible = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
