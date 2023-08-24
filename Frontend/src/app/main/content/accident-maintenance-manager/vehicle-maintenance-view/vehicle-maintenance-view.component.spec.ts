import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMaintenanceViewComponent } from './vehicle-maintenance-view.component';

describe('VehicleMaintenanceViewComponent', () => {
  let component: VehicleMaintenanceViewComponent;
  let fixture: ComponentFixture<VehicleMaintenanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMaintenanceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMaintenanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
