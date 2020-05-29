import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedPatientComponent } from './visited-patient.component';

describe('VisitedPatientComponent', () => {
  let component: VisitedPatientComponent;
  let fixture: ComponentFixture<VisitedPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitedPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
