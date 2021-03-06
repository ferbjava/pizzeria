import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPanelComponent } from './admin-panel.component';
import {ManageDishesComponent} from '../manage-dishes/manage-dishes.component';
import {ManageOrdersComponent} from '../manage-orders/manage-orders.component';
import {DishDetailsComponent} from '../dish-details/dish-details.component';
import {OrderDetailsComponent} from '../order-details/order-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DishPreviewComponent} from '../dish-preview/dish-preview.component';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AdminPanelComponent,
        ManageDishesComponent,
        ManageOrdersComponent,
        DishDetailsComponent,
        OrderDetailsComponent,
        DishPreviewComponent]
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
