import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './router/app.routing';

//COMPONENTES
import { HomeComponent } from './modules/home/home/home.component';
import { GridComponent } from './modules/inventario/grid/grid.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    GridComponent, 
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
