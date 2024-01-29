import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmCompanyProfileComponent } from './bm-company-profile.component';

describe('BmCompanyProfileComponent', () => {
  let component: BmCompanyProfileComponent;
  let fixture: ComponentFixture<BmCompanyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmCompanyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
