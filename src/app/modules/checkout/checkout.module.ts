import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutes } from './checkout.route';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, InputTextModule, ReactiveFormsModule, RouterModule.forRoot(CheckoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutModule { }
