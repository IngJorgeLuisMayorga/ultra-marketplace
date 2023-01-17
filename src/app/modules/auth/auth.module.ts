import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';
import { SignupViewComponent } from './views/signup-view/signup-view.component';
import { SigninViewComponent } from './views/signin-view/signin-view.component';
import { RecoveryPasswordViewComponent } from './views/recovery-password-view/recovery-password-view.component';
import { CartRoutes } from '../cart/cart.routes';

@NgModule({
  declarations: [
    AuthComponent,
    SignupViewComponent,
    SigninViewComponent,
    RecoveryPasswordViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(CartRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthModule {}
