import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgramBookingComponent } from './view-program-booking.component';

describe('ViewProgramBookingComponent', () => {
  let component: ViewProgramBookingComponent;
  let fixture: ComponentFixture<ViewProgramBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProgramBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProgramBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
