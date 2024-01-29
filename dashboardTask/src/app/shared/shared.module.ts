import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BmHeaderComponent } from './components/bm-header/bm-header.component';
import { BmFooterComponent } from './components/bm-footer/bm-footer.component';
import { BmCompanyProfileComponent } from './components/bm-company-profile/bm-company-profile.component';
import { BmCatalogCardsComponent } from './components/bm-catalog-cards/bm-catalog-cards.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

const APP_COMPONENTS = [
  BmHeaderComponent,
  BmFooterComponent,
  BmCompanyProfileComponent,
  BmCatalogCardsComponent
]

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,

  ],
  exports: [...APP_COMPONENTS, Ng2SearchPipeModule , FormsModule ],
})
export class SharedModule { }
