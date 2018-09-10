import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full'},
  { path: 'dishes', component: DishesComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
