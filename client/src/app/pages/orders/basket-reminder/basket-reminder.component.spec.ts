import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketReminderComponent } from './basket-reminder.component';

describe('BasketReminderComponent', () => {
  let component: BasketReminderComponent;
  let fixture: ComponentFixture<BasketReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
