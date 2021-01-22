import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaOutputComponent } from './idea-output.component';

describe('IdeaOutputComponent', () => {
  let component: IdeaOutputComponent;
  let fixture: ComponentFixture<IdeaOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
