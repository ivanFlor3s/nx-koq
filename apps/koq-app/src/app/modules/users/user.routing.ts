import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersGridComponent } from './users-grid/users-grid.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
    { path: '', component: UsersGridComponent },
    { path: 'editar/:id', component: UserEditComponent },
    { path: '**', pathMatch:'full', redirectTo:'' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
