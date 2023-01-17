import { Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserEditViewComponent } from "./views/user-edit-view/user-edit-view.component";
import { UserProfileViewComponent } from "./views/user-profile-view/user-profile-view.component";

export const UsersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileViewComponent
      },
      {
        path: 'edit',
        component: UserEditViewComponent
      }
    ]
  }
];
