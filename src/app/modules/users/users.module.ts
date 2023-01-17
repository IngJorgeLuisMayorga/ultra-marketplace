import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileViewComponent } from './views/user-profile-view/user-profile-view.component';
import { UserEditViewComponent } from './views/user-edit-view/user-edit-view.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UserProfileViewComponent,
    UserEditViewComponent,
    UsersComponent
  ],
  imports: [CommonModule],
})
export class UsersModule {}
