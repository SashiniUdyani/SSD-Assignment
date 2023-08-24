import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOverTimeComponent } from './update-over-time.component';

describe('UpdateOverTimeComponent', () => {
  let component: UpdateOverTimeComponent;
  let fixture: ComponentFixture<UpdateOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOverTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
