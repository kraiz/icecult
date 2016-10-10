import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HubListComponent, HubComponent } from './hubs';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HubListComponent, HubComponent],
  imports: [
    routing,
    BrowserModule,
    MaterialModule.forRoot()
  ]
})
export class AppModule {}
