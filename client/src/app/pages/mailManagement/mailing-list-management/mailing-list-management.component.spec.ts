import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingListManagementComponent } from './mailing-list-management.component';

describe('MailingListManagementComponent', () => {
  let component: MailingListManagementComponent;
  let fixture: ComponentFixture<MailingListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingListManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
