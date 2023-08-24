import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgramBookingComponent } from './update-program-booking.component';

describe('UpdateProgramBookingComponent', () => {
  let component: UpdateProgramBookingComponent;
  let fixture: ComponentFixture<UpdateProgramBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProgramBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProgramBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
