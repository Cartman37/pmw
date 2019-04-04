import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { PropertiesComponent } from './properties/properties.component';
import { ClientsComponent } from './clients/clients.component';
import { PackageComponent } from './package/package.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PropertiesComponent,
    ClientsComponent,
    PackageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
