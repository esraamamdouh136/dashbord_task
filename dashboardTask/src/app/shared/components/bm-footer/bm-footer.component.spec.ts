import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmFooterComponent } from './bm-footer.component';

describe('BmFooterComponent', () => {
  let component: BmFooterComponent;
  let fixture: ComponentFixture<BmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
