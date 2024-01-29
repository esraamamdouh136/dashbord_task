import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterAppType } from '../../shared/enums/routing-enum';
import { CatalogsComponent } from './catalogs.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }
