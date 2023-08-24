import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaintenanceDetailsComponent } from './update-maintenance-details.component';

describe('UpdateMaintenanceDetailsComponent', () => {
  let component: UpdateMaintenanceDetailsComponent;
  let fixture: ComponentFixture<UpdateMaintenanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaintenanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMaintenanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
