import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { Dish} from '../models/dish.model';
import {DishesService} from '../services/dishes.service';
import {FormControl, FormControlName} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit, OnChanges, OnDestroy {

  private readonly destroy$ = new Subject();
  @Input() dish: Dish;
  availability = new FormControl('');

  constructor(
    private readonly dishesService: DishesService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.availability.setValue(this.dish.isAvailable);
  }

  updateDish(): void {
    this.dish.isAvailable = this.availability.value;
    this.dishesService.updateDish(this.dish)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.dish = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
