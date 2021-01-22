import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingCenterComponent } from './advertising-center.component';

describe('AdvertisingCenterComponent', () => {
  let component: AdvertisingCenterComponent;
  let fixture: ComponentFixture<AdvertisingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
