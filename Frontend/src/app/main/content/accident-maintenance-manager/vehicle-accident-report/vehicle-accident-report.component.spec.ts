import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAccidentReportComponent } from './vehicle-accident-report.component';

describe('VehicleAccidentReportComponent', () => {
  let component: VehicleAccidentReportComponent;
  let fixture: ComponentFixture<VehicleAccidentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleAccidentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAccidentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
