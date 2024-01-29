import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterAppType } from './shared/enums/routing-enum';
import { CatalogsComponent } from './feature/catalogs/catalogs.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: `${RouterAppType}`,
        loadChildren: () => import('./feature/catalogs/catalogs.module').then((m) => m.CatalogsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
