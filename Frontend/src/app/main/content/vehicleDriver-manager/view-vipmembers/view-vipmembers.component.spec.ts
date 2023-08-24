import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVipmembersComponent } from './view-vipmembers.component';

describe('ViewVipmembersComponent', () => {
  let component: ViewVipmembersComponent;
  let fixture: ComponentFixture<ViewVipmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVipmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVipmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
