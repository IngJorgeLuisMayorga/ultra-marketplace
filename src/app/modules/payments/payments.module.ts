import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { Router, RouterModule } from '@angular/router';
import { PaymentsRoutes } from './payments.routes';

@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [CommonModule,  RouterModule.forRoot(PaymentsRoutes)],
  exports: [RouterModule]
})
export class PaymentsModule {}
