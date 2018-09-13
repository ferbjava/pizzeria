import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { HttpClientModule } from '@angular/common/http';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DishPreviewComponent } from './dish-preview/dish-preview.component';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { CartComponent } from './cart/cart.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManageDishesComponent } from './manage-dishes/manage-dishes.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailsComponent,
    DishPreviewComponent,
    HeaderPanelComponent,
    CartComponent,
    OrderFormComponent,
    LoginComponent,
    AdminPanelComponent,
    ManageDishesComponent,
    ManageOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
