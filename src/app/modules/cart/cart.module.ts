import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from '../auth/auth.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [CommonModule , SharedModule, RouterModule.forRoot(AuthRoutes)],
})
export class CartModule {}
