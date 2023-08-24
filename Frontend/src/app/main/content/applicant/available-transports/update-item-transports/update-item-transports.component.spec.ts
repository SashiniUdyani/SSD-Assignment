import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemTransportsComponent } from './update-item-transports.component';

describe('UpdateItemTransportsComponent', () => {
  let component: UpdateItemTransportsComponent;
  let fixture: ComponentFixture<UpdateItemTransportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemTransportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemTransportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
