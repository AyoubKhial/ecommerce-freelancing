import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockIpsComponent } from './block-ips.component';

describe('BlockIpsComponent', () => {
  let component: BlockIpsComponent;
  let fixture: ComponentFixture<BlockIpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockIpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
