import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestManagementComponent } from './support-request-management.component';

describe('SupportRequestManagementComponent', () => {
  let component: SupportRequestManagementComponent;
  let fixture: ComponentFixture<SupportRequestManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportRequestManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportRequestManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
