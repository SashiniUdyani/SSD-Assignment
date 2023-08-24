import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAccidentComponent } from './vehicle-accident.component';

describe('VehicleAccidentComponent', () => {
  let component: VehicleAccidentComponent;
  let fixture: ComponentFixture<VehicleAccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleAccidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
