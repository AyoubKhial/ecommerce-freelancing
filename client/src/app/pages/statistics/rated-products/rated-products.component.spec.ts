import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedProductsComponent } from './rated-products.component';

describe('RatedProductsComponent', () => {
  let component: RatedProductsComponent;
  let fixture: ComponentFixture<RatedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
