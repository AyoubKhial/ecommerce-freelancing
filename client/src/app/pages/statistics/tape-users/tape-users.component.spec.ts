import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeUsersComponent } from './tape-users.component';

describe('TapeUsersComponent', () => {
  let component: TapeUsersComponent;
  let fixture: ComponentFixture<TapeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapeUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
