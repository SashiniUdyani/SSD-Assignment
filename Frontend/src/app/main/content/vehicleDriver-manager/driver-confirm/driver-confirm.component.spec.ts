import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverConfirmComponent } from './driver-confirm.component';

describe('DriverConfirmComponent', () => {
  let component: DriverConfirmComponent;
  let fixture: ComponentFixture<DriverConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
