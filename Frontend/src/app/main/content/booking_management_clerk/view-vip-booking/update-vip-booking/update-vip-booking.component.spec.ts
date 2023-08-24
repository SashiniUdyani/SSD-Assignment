import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVipBookingComponent } from './update-vip-booking.component';

describe('UpdateVipBookingComponent', () => {
  let component: UpdateVipBookingComponent;
  let fixture: ComponentFixture<UpdateVipBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVipBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVipBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
