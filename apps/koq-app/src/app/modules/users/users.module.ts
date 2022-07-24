import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './user.routing';

//COMPONENTS
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { SharedModule } from '@nx-koq/shared';

@NgModule({
  declarations: [UserEditComponent,UsersGridComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
