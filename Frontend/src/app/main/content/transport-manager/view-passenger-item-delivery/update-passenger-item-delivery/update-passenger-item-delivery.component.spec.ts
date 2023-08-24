import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassengerItemDeliveryComponent } from './update-passenger-item-delivery.component';

describe('UpdatePassengerItemDeliveryComponent', () => {
  let component: UpdatePassengerItemDeliveryComponent;
  let fixture: ComponentFixture<UpdatePassengerItemDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePassengerItemDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePassengerItemDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
