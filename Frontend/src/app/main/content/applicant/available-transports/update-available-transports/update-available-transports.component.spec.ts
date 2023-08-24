import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAvailableTransportsComponent } from './update-available-transports.component';

describe('UpdateAvailableTransportsComponent', () => {
  let component: UpdateAvailableTransportsComponent;
  let fixture: ComponentFixture<UpdateAvailableTransportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAvailableTransportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAvailableTransportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
