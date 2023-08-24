import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportPassengerApplicationsComponent } from './transport-passenger-applications.component';

describe('TransportPassengerApplicationsComponent', () => {
  let component: TransportPassengerApplicationsComponent;
  let fixture: ComponentFixture<TransportPassengerApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportPassengerApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportPassengerApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
