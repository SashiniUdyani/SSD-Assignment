import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelUpdateComponent } from './fuel-update.component';

describe('FuelUpdateComponent', () => {
  let component: FuelUpdateComponent;
  let fixture: ComponentFixture<FuelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
