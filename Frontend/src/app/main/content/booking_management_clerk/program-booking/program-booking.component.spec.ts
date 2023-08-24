import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBookingComponent } from './program-booking.component';

describe('ProgramBookingComponent', () => {
  let component: ProgramBookingComponent;
  let fixture: ComponentFixture<ProgramBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
