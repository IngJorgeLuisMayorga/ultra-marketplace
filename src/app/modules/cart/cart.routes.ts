import { Routes } from "@angular/router";
import { CartComponent } from "./cart.component";

export const CartRoutes: Routes = [
  {
    path: 'basket',
    title: 'Basket | Ultra Marketplace',
    component: CartComponent
  },
]
