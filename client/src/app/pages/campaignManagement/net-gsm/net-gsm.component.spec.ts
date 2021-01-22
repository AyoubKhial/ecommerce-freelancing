import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetGSMComponent } from './net-gsm.component';

describe('NetGSMComponent', () => {
  let component: NetGSMComponent;
  let fixture: ComponentFixture<NetGSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetGSMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetGSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
