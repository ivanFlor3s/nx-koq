import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './router/app.routing';
import { MaterialModsModule } from '@nx-koq/material';
import { SharedModule } from '@nx-koq/shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MaterialModsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
