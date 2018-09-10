import { Component, Input, OnInit} from '@angular/core';
import { Dish} from '../models/dish.model';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  @Input() dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
