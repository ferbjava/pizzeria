import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { CartComponent} from './cart/cart.component';
import { OrderFormComponent} from './order-form/order-form.component';
import {LoginComponent} from './login/login.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full'},
  { path: 'dishes', component: DishesComponent},
  { path: 'cart', component: CartComponent},
  { path: 'order', component: OrderFormComponent},
  { path: 'login', component: LoginComponent},
  { path: 'administration', component: AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
