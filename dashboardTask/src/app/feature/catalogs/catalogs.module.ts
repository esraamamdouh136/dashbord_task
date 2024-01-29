import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CatalogsComponent } from './catalogs.component';
import { SharedModule } from '../../shared/shared.module';
import { SideBarFilterComponent } from './side-bar-filter/side-bar-filter.component';
import { CatalogsRoutingModule } from './catalogs-routing.module';

@NgModule({
  declarations: [
    CatalogsComponent,
    SideBarFilterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CatalogsRoutingModule
  ],
  providers: [],
})
export class CatalogsModule { }
