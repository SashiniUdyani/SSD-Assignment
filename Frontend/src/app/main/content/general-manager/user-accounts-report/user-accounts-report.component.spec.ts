import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountsReportComponent } from './user-accounts-report.component';

describe('UserAccountsReportComponent', () => {
  let component: UserAccountsReportComponent;
  let fixture: ComponentFixture<UserAccountsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
