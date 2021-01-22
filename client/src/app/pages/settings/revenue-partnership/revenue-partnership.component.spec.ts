import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuePartnershipComponent } from './revenue-partnership.component';

describe('RevenuePartnershipComponent', () => {
  let component: RevenuePartnershipComponent;
  let fixture: ComponentFixture<RevenuePartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuePartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuePartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
