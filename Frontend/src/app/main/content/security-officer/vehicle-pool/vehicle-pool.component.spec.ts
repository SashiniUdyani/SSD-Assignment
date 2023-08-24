import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePoolComponent } from './vehicle-pool.component';

describe('VehiclePoolComponent', () => {
  let component: VehiclePoolComponent;
  let fixture: ComponentFixture<VehiclePoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
