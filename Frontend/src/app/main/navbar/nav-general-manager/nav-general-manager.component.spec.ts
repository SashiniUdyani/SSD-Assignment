import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGeneralManagerComponent } from './nav-general-manager.component';

describe('NavGeneralManagerComponent', () => {
  let component: NavGeneralManagerComponent;
  let fixture: ComponentFixture<NavGeneralManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGeneralManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGeneralManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
