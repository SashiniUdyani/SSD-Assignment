import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVehicleDriverManagerComponent } from './nav-vehicle-driver-manager.component';

describe('NavVehicleDriverManagerComponent', () => {
  let component: NavVehicleDriverManagerComponent;
  let fixture: ComponentFixture<NavVehicleDriverManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVehicleDriverManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVehicleDriverManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
