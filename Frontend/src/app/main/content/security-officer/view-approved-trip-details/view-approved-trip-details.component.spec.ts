import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovedTripDetailsComponent } from './view-approved-trip-details.component';

describe('ViewApprovedTripDetailsComponent', () => {
  let component: ViewApprovedTripDetailsComponent;
  let fixture: ComponentFixture<ViewApprovedTripDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApprovedTripDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApprovedTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
