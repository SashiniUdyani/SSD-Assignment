import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerItemDeliveryComponent } from './passenger-item-delivery.component';

describe('PassengerItemDeliveryComponent', () => {
  let component: PassengerItemDeliveryComponent;
  let fixture: ComponentFixture<PassengerItemDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerItemDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerItemDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
