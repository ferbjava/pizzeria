import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  isDishesPanelActive = false;
  isOrdersPanelActive = false;
  constructor() { }

  ngOnInit() {

  }

  showDishes(): void {
    this.isDishesPanelActive = true;
    this.isOrdersPanelActive = false;
  }

  showOrders(): void {
    this.isDishesPanelActive = false;
    this.isOrdersPanelActive = true;
  }

}
