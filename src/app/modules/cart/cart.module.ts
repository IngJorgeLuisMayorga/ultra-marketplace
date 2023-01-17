import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailsViewComponent } from './views/cart-details-view/cart-details-view.component';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartDetailsViewComponent,
    CartComponent
  ],
  imports: [CommonModule , RouterModule.forRoot(AuthRoutes)],
})
export class CartModule {}
