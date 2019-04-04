import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ItemsComponent} from './items/items.component';
import {PackageComponent} from './package/package.component';
import {PropertiesComponent} from './properties/properties.component';
import {ClientsComponent} from './clients/clients.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'package', component: PackageComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
