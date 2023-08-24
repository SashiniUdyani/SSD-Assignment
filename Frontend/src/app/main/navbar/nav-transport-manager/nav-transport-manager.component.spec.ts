import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTransportManagerComponent } from './nav-transport-manager.component';

describe('NavTransportManagerComponent', () => {
  let component: NavTransportManagerComponent;
  let fixture: ComponentFixture<NavTransportManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTransportManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTransportManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
