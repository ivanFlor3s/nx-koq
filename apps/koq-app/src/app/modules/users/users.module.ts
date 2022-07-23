import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './user.routing';

//COMPONENTS
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersGridComponent } from './users-grid/users-grid.component';

@NgModule({
  declarations: [UserEditComponent,UsersGridComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
