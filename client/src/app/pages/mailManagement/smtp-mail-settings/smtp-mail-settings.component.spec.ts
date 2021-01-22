import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpMailSettingsComponent } from './smtp-mail-settings.component';

describe('SmtpMailSettingsComponent', () => {
  let component: SmtpMailSettingsComponent;
  let fixture: ComponentFixture<SmtpMailSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpMailSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpMailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
