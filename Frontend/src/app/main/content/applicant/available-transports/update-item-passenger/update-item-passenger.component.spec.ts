import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemPassengerComponent } from './update-item-passenger.component';

describe('UpdateItemPassengerComponent', () => {
  let component: UpdateItemPassengerComponent;
  let fixture: ComponentFixture<UpdateItemPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
