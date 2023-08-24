import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVipmemberComponent } from './update-vipmember.component';

describe('UpdateVipmemberComponent', () => {
  let component: UpdateVipmemberComponent;
  let fixture: ComponentFixture<UpdateVipmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVipmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVipmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
