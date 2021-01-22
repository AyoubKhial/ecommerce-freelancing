import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseLimitComponent } from './purchase-limit.component';

describe('PurchaseLimitComponent', () => {
  let component: PurchaseLimitComponent;
  let fixture: ComponentFixture<PurchaseLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
