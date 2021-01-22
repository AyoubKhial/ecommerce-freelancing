import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountRequestsComponent } from './discount-requests.component';

describe('DiscountRequestsComponent', () => {
  let component: DiscountRequestsComponent;
  let fixture: ComponentFixture<DiscountRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
