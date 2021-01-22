import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBuyComponent } from './quick-buy.component';

describe('QuickBuyComponent', () => {
  let component: QuickBuyComponent;
  let fixture: ComponentFixture<QuickBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
