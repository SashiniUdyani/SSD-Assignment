import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAccidentMaintenanceManagerComponent } from './nav-accident-maintenance-manager.component';

describe('NavAccidentMaintenanceManagerComponent', () => {
  let component: NavAccidentMaintenanceManagerComponent;
  let fixture: ComponentFixture<NavAccidentMaintenanceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAccidentMaintenanceManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAccidentMaintenanceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
