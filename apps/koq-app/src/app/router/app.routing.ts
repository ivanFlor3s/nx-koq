import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GridComponent } from '../modules/inventario/grid/grid.component';
import { HomeComponent } from '../modules/home/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inventario', component: GridComponent },
    { path: '**', pathMatch:'full', redirectTo:'' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
