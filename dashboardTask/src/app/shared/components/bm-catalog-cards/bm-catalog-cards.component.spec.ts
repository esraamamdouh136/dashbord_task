import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmCatalogCardsComponent } from './bm-catalog-cards.component';

describe('BmCatalogCardsComponent', () => {
  let component: BmCatalogCardsComponent;
  let fixture: ComponentFixture<BmCatalogCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmCatalogCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmCatalogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
