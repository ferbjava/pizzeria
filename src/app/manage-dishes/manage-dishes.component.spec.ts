import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDishesComponent } from './manage-dishes.component';
import {DishDetailsComponent} from '../dish-details/dish-details.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ManageDishesComponent', () => {
  let component: ManageDishesComponent;
  let fixture: ComponentFixture<ManageDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ManageDishesComponent, DishDetailsComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
