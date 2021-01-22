import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizationsComponent } from './optimizations.component';

describe('OptimizationsComponent', () => {
  let component: OptimizationsComponent;
  let fixture: ComponentFixture<OptimizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
