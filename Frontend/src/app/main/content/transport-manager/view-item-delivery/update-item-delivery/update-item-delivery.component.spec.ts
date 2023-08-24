import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemDeliveryComponent } from './update-item-delivery.component';

describe('UpdateItemDeliveryComponent', () => {
  let component: UpdateItemDeliveryComponent;
  let fixture: ComponentFixture<UpdateItemDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
