import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOverTimeComponent } from './view-over-time.component';

describe('ViewOverTimeComponent', () => {
  let component: ViewOverTimeComponent;
  let fixture: ComponentFixture<ViewOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOverTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
