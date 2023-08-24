import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassengerItemDeliveryComponent } from './view-passenger-item-delivery.component';

describe('ViewPassengerItemDeliveryComponent', () => {
  let component: ViewPassengerItemDeliveryComponent;
  let fixture: ComponentFixture<ViewPassengerItemDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassengerItemDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassengerItemDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
