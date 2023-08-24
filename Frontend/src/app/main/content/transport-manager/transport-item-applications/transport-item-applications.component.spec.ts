import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportItemApplicationsComponent } from './transport-item-applications.component';

describe('TransportItemApplicationsComponent', () => {
  let component: TransportItemApplicationsComponent;
  let fixture: ComponentFixture<TransportItemApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportItemApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportItemApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
