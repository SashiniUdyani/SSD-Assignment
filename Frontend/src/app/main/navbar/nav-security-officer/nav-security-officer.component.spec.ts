import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSecurityOfficerComponent } from './nav-security-officer.component';

describe('NavSecurityOfficerComponent', () => {
  let component: NavSecurityOfficerComponent;
  let fixture: ComponentFixture<NavSecurityOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSecurityOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSecurityOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
