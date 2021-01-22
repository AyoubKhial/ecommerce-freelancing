import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContentSettingsComponent } from './site-content-settings.component';

describe('SiteContentSettingsComponent', () => {
  let component: SiteContentSettingsComponent;
  let fixture: ComponentFixture<SiteContentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteContentSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteContentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
