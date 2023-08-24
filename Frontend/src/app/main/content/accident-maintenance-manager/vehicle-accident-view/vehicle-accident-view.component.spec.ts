import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAccidentViewComponent } from './vehicle-accident-view.component';

describe('VehicleAccidentViewComponent', () => {
  let component: VehicleAccidentViewComponent;
  let fixture: ComponentFixture<VehicleAccidentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleAccidentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAccidentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
