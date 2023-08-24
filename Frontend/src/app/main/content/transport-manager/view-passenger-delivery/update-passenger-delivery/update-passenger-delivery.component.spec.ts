import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassengerDeliveryComponent } from './update-passenger-delivery.component';

describe('UpdatePassengerDeliveryComponent', () => {
  let component: UpdatePassengerDeliveryComponent;
  let fixture: ComponentFixture<UpdatePassengerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePassengerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePassengerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
