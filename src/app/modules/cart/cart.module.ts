import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from '../auth/auth.routes';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [CommonModule , RouterModule.forRoot(AuthRoutes)],
})
export class CartModule {}
