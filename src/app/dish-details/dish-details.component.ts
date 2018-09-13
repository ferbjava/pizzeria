import { Component, Input, OnInit} from '@angular/core';
import { Dish} from '../models/dish.model';
import {DishesService} from '../services/dishes.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  @Input() dish: Dish;

  constructor(
    private readonly dishesService: DishesService
  ) { }

  ngOnInit() {
  }

  updateDish() {
    return null;
  }
}
