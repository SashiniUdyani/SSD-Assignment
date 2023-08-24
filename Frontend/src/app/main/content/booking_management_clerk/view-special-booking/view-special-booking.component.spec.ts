import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecialBookingComponent } from './view-special-booking.component';

describe('ViewSpecialBookingComponent', () => {
  let component: ViewSpecialBookingComponent;
  let fixture: ComponentFixture<ViewSpecialBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecialBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecialBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
