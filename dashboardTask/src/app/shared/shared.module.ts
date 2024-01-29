import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BmHeaderComponent } from './components/bm-header/bm-header.component';
import { BmFooterComponent } from './components/bm-footer/bm-footer.component';
import { BmCompanyProfileComponent } from './components/bm-company-profile/bm-company-profile.component';
import { BmCatalogCardsComponent } from './components/bm-catalog-cards/bm-catalog-cards.component';
const APP_COMPONENTS = [
  BmHeaderComponent,
  BmFooterComponent,
  BmCompanyProfileComponent
]

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    BmCatalogCardsComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [...APP_COMPONENTS],
})
export class SharedModule { }
