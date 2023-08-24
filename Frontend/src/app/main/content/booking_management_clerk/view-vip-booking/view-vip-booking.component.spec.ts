import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVipBookingComponent } from './view-vip-booking.component';

describe('ViewVipBookingComponent', () => {
  let component: ViewVipBookingComponent;
  let fixture: ComponentFixture<ViewVipBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVipBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVipBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
