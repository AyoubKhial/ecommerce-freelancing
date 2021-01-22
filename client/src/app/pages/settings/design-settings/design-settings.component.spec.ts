import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSettingsComponent } from './design-settings.component';

describe('DesignSettingsComponent', () => {
  let component: DesignSettingsComponent;
  let fixture: ComponentFixture<DesignSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
