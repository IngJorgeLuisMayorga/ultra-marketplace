import { Routes } from "@angular/router";
import { CheckoutComponent } from "./checkout.component";
import { CheckoutGuard } from "./guards/checkout.guard";

export const CheckoutRoutes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout | Ultra Marketplace',
    canActivate: [CheckoutGuard]
  },
]
