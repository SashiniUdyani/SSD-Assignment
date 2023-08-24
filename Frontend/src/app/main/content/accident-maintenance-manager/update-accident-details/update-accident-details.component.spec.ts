import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccidentDetailsComponent } from './update-accident-details.component';

describe('UpdateAccidentDetailsComponent', () => {
  let component: UpdateAccidentDetailsComponent;
  let fixture: ComponentFixture<UpdateAccidentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccidentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccidentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
