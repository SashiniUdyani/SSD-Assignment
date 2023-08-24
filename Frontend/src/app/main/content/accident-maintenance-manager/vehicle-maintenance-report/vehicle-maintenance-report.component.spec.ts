import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMaintenanceReportComponent } from './vehicle-maintenance-report.component';

describe('VehicleMaintenanceReportComponent', () => {
  let component: VehicleMaintenanceReportComponent;
  let fixture: ComponentFixture<VehicleMaintenanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMaintenanceReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMaintenanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
