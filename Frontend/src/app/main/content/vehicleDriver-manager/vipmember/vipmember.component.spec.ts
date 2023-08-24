import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipmemberComponent } from './vipmember.component';

describe('VipmemberComponent', () => {
  let component: VipmemberComponent;
  let fixture: ComponentFixture<VipmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
