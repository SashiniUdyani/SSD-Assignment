import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingReportComponent } from './waiting-report.component';

describe('WaitingReportComponent', () => {
  let component: WaitingReportComponent;
  let fixture: ComponentFixture<WaitingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
