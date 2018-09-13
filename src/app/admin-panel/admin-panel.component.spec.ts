import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPanelComponent } from './admin-panel.component';
import {ManageDishesComponent} from '../manage-dishes/manage-dishes.component';
import {ManageOrdersComponent} from '../manage-orders/manage-orders.component';
import {DishDetailsComponent} from '../dish-details/dish-details.component';
import {OrderDetailsComponent} from '../order-details/order-details.component';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelComponent, ManageDishesComponent, ManageOrdersComponent, DishDetailsComponent, OrderDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
