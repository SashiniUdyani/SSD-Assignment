import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemDeliveryComponent } from './view-item-delivery.component';

describe('ViewItemDeliveryComponent', () => {
  let component: ViewItemDeliveryComponent;
  let fixture: ComponentFixture<ViewItemDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
