import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutes } from './checkout.route';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,  RouterModule.forRoot(CheckoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutModule { }
