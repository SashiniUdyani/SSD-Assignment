import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDeliveryComponent } from './passenger-delivery.component';

describe('PassengerDeliveryComponent', () => {
  let component: PassengerDeliveryComponent;
  let fixture: ComponentFixture<PassengerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
