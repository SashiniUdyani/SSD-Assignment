import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRegestrationComponent } from './applicant-regestration.component';

describe('ApplicantRegestrationComponent', () => {
  let component: ApplicantRegestrationComponent;
  let fixture: ComponentFixture<ApplicantRegestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantRegestrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantRegestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
