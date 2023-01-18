import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SigninViewComponent } from "./views/signin-view/signin-view.component";
import { SignupViewComponent } from "./views/signup-view/signup-view.component";

export const AuthRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninViewComponent
      },
      {
        path: 'signup',
        component: SignupViewComponent
      }
    ]
  },
]
