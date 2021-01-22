import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAdditionalSettingsComponent } from './delivery-additional-settings.component';

describe('DeliveryAdditionalSettingsComponent', () => {
  let component: DeliveryAdditionalSettingsComponent;
  let fixture: ComponentFixture<DeliveryAdditionalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAdditionalSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAdditionalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
