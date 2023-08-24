import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalDepartureLogPageComponent } from './arrival-departure-log-page.component';

describe('ArrivalDepartureLogPageComponent', () => {
  let component: ArrivalDepartureLogPageComponent;
  let fixture: ComponentFixture<ArrivalDepartureLogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalDepartureLogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalDepartureLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
