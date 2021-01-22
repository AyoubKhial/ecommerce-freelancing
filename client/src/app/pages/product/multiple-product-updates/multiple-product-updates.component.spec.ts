import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProductUpdatesComponent } from './multiple-product-updates.component';

describe('MultipleProductUpdatesComponent', () => {
  let component: MultipleProductUpdatesComponent;
  let fixture: ComponentFixture<MultipleProductUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleProductUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleProductUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
