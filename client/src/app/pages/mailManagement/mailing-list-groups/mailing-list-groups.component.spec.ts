import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingListGroupsComponent } from './mailing-list-groups.component';

describe('MailingListGroupsComponent', () => {
  let component: MailingListGroupsComponent;
  let fixture: ComponentFixture<MailingListGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingListGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
