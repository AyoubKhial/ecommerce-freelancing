import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDesignComponent } from './invoice-design.component';

describe('InvoiceDesignComponent', () => {
  let component: InvoiceDesignComponent;
  let fixture: ComponentFixture<InvoiceDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
