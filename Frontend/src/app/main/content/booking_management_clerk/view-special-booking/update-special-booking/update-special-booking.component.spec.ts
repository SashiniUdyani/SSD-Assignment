import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialBookingComponent } from './update-special-booking.component';

describe('UpdateSpecialBookingComponent', () => {
  let component: UpdateSpecialBookingComponent;
  let fixture: ComponentFixture<UpdateSpecialBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpecialBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecialBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
