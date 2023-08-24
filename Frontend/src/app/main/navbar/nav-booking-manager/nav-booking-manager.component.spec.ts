import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBookingManagerComponent } from './nav-booking-manager.component';

describe('NavBookingManagerComponent', () => {
  let component: NavBookingManagerComponent;
  let fixture: ComponentFixture<NavBookingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBookingManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBookingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
