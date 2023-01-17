import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  declarations: [
    CheckoutViewComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
