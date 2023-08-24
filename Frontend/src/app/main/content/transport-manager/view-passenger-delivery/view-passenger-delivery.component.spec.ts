import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassengerDeliveryComponent } from './view-passenger-delivery.component';

describe('ViewPassengerDeliveryComponent', () => {
  let component: ViewPassengerDeliveryComponent;
  let fixture: ComponentFixture<ViewPassengerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassengerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassengerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
