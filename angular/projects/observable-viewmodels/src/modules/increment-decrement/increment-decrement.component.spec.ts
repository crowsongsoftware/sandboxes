import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcrementDecrementComponent } from './increment-decrement.component';

describe('ImcrementDecrementComponent', () => {
  let component: ImcrementDecrementComponent;
  let fixture: ComponentFixture<ImcrementDecrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcrementDecrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcrementDecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
