import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCampaignsComponent } from './pos-campaigns.component';

describe('PosCampaignsComponent', () => {
  let component: PosCampaignsComponent;
  let fixture: ComponentFixture<PosCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
