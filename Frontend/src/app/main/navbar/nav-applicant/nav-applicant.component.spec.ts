import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavApplicantComponent } from './nav-applicant.component';

describe('NavApplicantComponent', () => {
  let component: NavApplicantComponent;
  let fixture: ComponentFixture<NavApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
