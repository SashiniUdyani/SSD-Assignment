import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipReportComponent } from './vip-report.component';

describe('VipReportComponent', () => {
  let component: VipReportComponent;
  let fixture: ComponentFixture<VipReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
