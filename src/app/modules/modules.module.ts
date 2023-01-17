import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { PaymentsModule } from './payments/payments.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

const COMPONENTS: any[] = [];

const MODULES = [
  AuthModule,
  CartModule,
  CheckoutModule,
  PaymentsModule,
  ProductsModule,
  UsersModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS],
})
export class ModulesModule {}
