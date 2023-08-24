import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPassengerComponent } from './item-passenger.component';

describe('ItemPassengerComponent', () => {
  let component: ItemPassengerComponent;
  let fixture: ComponentFixture<ItemPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
